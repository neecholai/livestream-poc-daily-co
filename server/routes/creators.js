const express = require("express");
const router = express.Router();
const Creator = require("../models/creator");
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")

router.post("/register", async function(req, res, next) {
  try {
    await Creator.register(req.body);
    let token = jwt.sign({ email: req.body.user_email, isCreator: true }, SECRET_KEY);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

router.get("/events", async function(req, res, next) {
  // creator auth required
  // get all events for a creator (to find upcoming events)
  try {
    const events = await Creator.getEventsForCreator(req.user.email);
    return res.send({ events });
  } catch (err) {
    return next(err);
  }
});

router.patch("/", async function(req, res, next) {
   try {
     const creator = await Creator.update(req.user.email, req.body);
     res.send({ creator });
   } catch (err) {
     return next(err);
   }

});

module.exports = router;
