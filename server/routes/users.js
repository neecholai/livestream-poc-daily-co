const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const ExpressError = require("../utils/expressError");
const crypto = require("crypto");
const { ensureLoggedIn } = require("../middleware/auth");
const schemaValidator = require("../utils/schemaValidator")
const createUserSchema = require("../schemas/createUser.json")

router.post("/login", async function(req, res, next) {
  try {
    let { email, password } = req.body;
    if (await User.authenticate(email, password)) {
      const isCreator = await User.checkIfCreator(email);
      let token = jwt.sign({ email, isCreator }, SECRET_KEY);
      return res.json({ token });
    } else {
      throw new ExpressError("Invalid credentials", 400);
    }
  } catch (err) {
    return next(err);
  }
});

router.post("/register", async function(req, res, next) {
  try {
    const {isValid, errors} = schemaValidator(createUserSchema, req.body);
    if (isValid === false) {
      throw new ExpressError(errors, 400);
    }
    let { email } = await User.register(req.body);
    let token = jwt.sign({ email }, SECRET_KEY);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

router.post("/forgot-password", async function(req, res, next) {
  try {
    const foundUser = await User.findBy("email", req.body.email);
    if (foundUser !== undefined) {
      const token = crypto.randomBytes(24).toString("hex");
      await User.update(req.body.email, { password_reset_token: token });
      // TODO: sent a mailer with a link that includes the token await sendMail();
      res.send({ token });
    } else {
      throw new ExpressError("Invalid credentials", 400);
    }
  } catch (err) {
    return next(err);
  }
});

router.post("/reset-password", async function(req, res, next) {
  try {
    // find user by token
    const foundUser = await User.findBy(
      "password_reset_token",
      req.body.password_reset_token
    );
    if (foundUser !== undefined) {
      // update the password, set the reset_token to null
      const user = await User.update(foundUser.email, {
        password: req.body.password,
        password_reset_token: null
      });
      return res.send({ user });
    } else {
      throw new ExpressError("Invalid credentials", 400);
    }
  } catch (err) {
    return next(err);
  }
});

router.patch("/", ensureLoggedIn, async function(req, res, next) {
  try {
    const user = await User.update(req.user.email, req.body);
    res.send({ user });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
