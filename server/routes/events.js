const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const {
  ensureLoggedIn,
  ensureCreator,
  ensureCorrectCreator
} = require("../middleware/auth");

router.get("/", async function(req, res, next) {
  // get all events
  try {
    const events = await Event.all();
    return res.send({ events });
  } catch (err) {
    return next(err);
  }
});

router.get("/:event_id", async function(req, res, next) {
  // get a specific event
  // if the event has started - show the player (on the frontend)
  // if the user going here has purchased this event or subscription, let them know (event object contains all user IDs who have signed up)
  // if the event has not been paid for
  // show the payment options
  try {
    const event = await Event.get(req.params.event_id);
    return res.send({ event });
  } catch (err) {
    return next(err);
  }
});

router.post("/", ensureLoggedIn, ensureCreator, async function(req, res, next) {
  // creator auth required
  // create an event
  try {
    let event = await Event.create({...req.body, creator_email: req.user.email});
    return res.send({event});
  } catch (err) {
    return next(err);
  }
});

router.post("/:event_id/signup", ensureLoggedIn, async function(req, res, next) {
  // auth required
  // signup for an event
  try {
    const signup = await Event.signup(req.user.email, req.params.event_id);
    return res.send({ signup });
  } catch (err) {
    return next(err);
  }
});

router.patch("/:event_id", ensureCorrectCreator, async function(req, res, next) {
  // creator auth required
  // create an events
  try {
    const event = await Event.update(req.params.event_id, req.body);
    return res.send({ event });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
