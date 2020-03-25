const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");

const creatorsRouter = require("./routes/creators");
const eventsRouter = require("./routes/events");
const paymentsRouter = require("./routes/payments");
const usersRouter = require("./routes/users");

const ExpressError = require("./utils/ExpressError");
const { authenticateJWT } = require("./middleware/auth");

if(process.env.NODE_ENV !== "test"){
  app.use(logger("dev"));
}

app.use(cors());
app.use(helmet());
app.use(express.json());

// get auth token for all routes
app.use(authenticateJWT);

app.use("/creators", creatorsRouter);
app.use("/events", eventsRouter);
app.use("/payments", paymentsRouter);
app.use("/users", usersRouter);

/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (process.env.NODE_ENV !== "test") console.error(err.stack);

  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;
