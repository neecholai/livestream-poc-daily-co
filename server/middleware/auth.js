const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const Event = require("../models/event")

/** Middleware: Authenticate user. */

function authenticateJWT(req, _, next) {
  try {
    const tokenFromBody = req.body._token;
    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload; // create a current user
    return next();
  } catch (err) {
    return next();
  }
}

/** Middleware: Requires user is authenticated. */

function ensureLoggedIn(req, _, next) {
  if (!req.user) {
    return next({ status: 401, message: "Unauthorized" });
  } else {
    return next();
  }
}

/** Middleware: Requires the current user to be a creator. */

function ensureCreator(req, _, next) {
  if (!req.user.isCreator) {
    return next({ status: 401, message: "Please sign up to be a creator" });
  } else {
    return next();
  }
}

/** Middleware: Requires the correct creator to be logged in. */

async function ensureCorrectCreator(req, _, next) {
  const event = await Event.findBy("id", req.params.event_id)
  try {
    if (req.user.isCreator && event.creator_email === req.user.email) {
      return next();
    } else {
      return next({ status: 401, message: "Unauthorized" });
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    return next({ status: 401, message: "Unauthorized" });
  }
}

module.exports = {
  authenticateJWT,
  ensureLoggedIn,
  ensureCreator,
  ensureCorrectCreator
};
