// npm packages
const request = require("supertest");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// app imports
const app = require("../../app");
const db = require("../../db");

// global auth variable to store things for all the tests
const TEST_DATA = {};

/**
 * Hooks to insert a user, creator, and event, and to authenticate
 *  the user and the creator for respective tokens that are stored
 *  in the input `testData` parameter.
 * @param {Object} TEST_DATA - build the TEST_DATA object
 */
async function beforeEachHook(TEST_DATA) {
  try {
    // login a user, get a token, store the user ID and token
    const hashedPassword = await bcrypt.hash("secret", 1);
    await db.query(
      `INSERT INTO users (email, password, first_name, last_name, phone)
                  VALUES ('test@rithmschool.com', $1, 'tester', 'mctest', '1233211212')`,
      [hashedPassword]
    );

    const response = await request(app)
      .post("/users/login")
      .send({
        email: "test@rithmschool.com",
        password: "secret"
      });

    TEST_DATA.userToken = response.body.token;
    TEST_DATA.currentEmail = jwt.decode(TEST_DATA.userToken).email;

    const creatorResponse = await request(app)
      .post("/creators/register")
      .send({
        user_email: TEST_DATA.currentEmail,
        _token: TEST_DATA.userToken
      });
    
    TEST_DATA.creatorToken = creatorResponse.body.token;

    const eventResponse = await request(app)
      .post("/events")
      .send({
        creator_email: TEST_DATA.currentEmail,
        _token: TEST_DATA.creatorToken,
        name: "test event",
        start_date: "March 30, 2020",
        start_time: "10:00"
      });
    
    TEST_DATA.eventId = eventResponse.body.event.id;
      
  } catch (error) {
    console.error(error);
  }
}

async function afterEachHook() {
  try {
    await db.query("DELETE FROM events_users");
    await db.query("DELETE FROM events");
    await db.query("DELETE FROM creators");
    await db.query("DELETE FROM users");
  } catch (error) {
    console.error(error);
  }
}

async function afterAllHook() {
  try {
    await db.end();
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  afterAllHook,
  afterEachHook,
  TEST_DATA,
  beforeEachHook
};
