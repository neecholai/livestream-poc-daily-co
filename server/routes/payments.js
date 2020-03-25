const express = require("express");
const router = express.Router();
const User = require("../models/user");
const db = require("../db");
const {
  createCustomer,
  createCharge,
  findCustomer
} = require("../utils/stripe");
const { createMessage } = require("../utils/twilio");
const { sendMail } = require("../utils/nodemailer");
const {ensureLoggedIn} = require("../middleware/auth")

router.post("/event", ensureLoggedIn, async function(req, res, next) {
  try {
    // find a customer in stripe by their customer ID
    const foundUser = await User.findBy("email", req.user.email);
    let customer;
    if (foundUser.stripe_customer_id !== null) {
      customer = await findCustomer(foundUser.stripe_customer_id);
    } else {
      customer = await createCustomer();
      // TODO: refactor to use model method
      await db.query(
        "UPDATE users SET stripe_customer_id = $1 WHERE email = $2",
        [customer.id, req.user.email]
      );
    }
    // create a charge in stripe with that customerId
    // get the amount and source from the front-end
    // TODO: pass in correct customer ID once we tokenize on the front-end
    const charge = await createCharge();

    // send an email to the customer notifying them
    // TODO: set up a mailchimp template to send to users
    const mail = await sendMail();

    // send a text to the customer with their unique event login
    // TODO: set up correct content for the text message!
    const message = await createMessage();

    // TODO: pay the creator of the event in stripe!

    return res.send("all done!");
  } catch (err) {
    return next(err);
  }
});

router.post("/subscription", ensureLoggedIn, async function(req, res, next) {
  // FIXME: should look similar to above
  // find or create the customer
  // create a subscription
  // send email
  // send a text
});

module.exports = router;
