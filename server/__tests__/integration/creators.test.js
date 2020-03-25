// npm packages
const request = require("supertest");

// app imports
const app = require("../../app");

const {
  TEST_DATA,
  afterEachHook,
  beforeEachHook,
  afterAllHook
} = require("./config");

beforeEach(async function() {
  await beforeEachHook(TEST_DATA);
});

describe("POST /creators", function() {
  test("Creates a new creator", async function() {
    const userResponse = await request(app)
      .post("/users/register")
      .send({
        email: "another@test.com",
        first_name: "another",
        last_name: "another",
        phone: "1233212",
        password: "another"
      });

    const response = await request(app)
      .post("/creators/register")
      .send({
        user_email: "another@test.com",
        _token: userResponse.token
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("Prevents creating a creator with duplicate email", async function() {
    const response = await request(app)
      .post("/creators/register")
      .send({
        _token: TEST_DATA.userToken,
        user_email: TEST_DATA.currentEmail
      });
    expect(response.statusCode).toBe(400);
  });
});

describe("GET /creators/events", function() {
  test("Gets a single a creator", async function() {
    const response = await request(app)
      .get(`/creators/events`)
      .send({
        _token: TEST_DATA.userToken
      });
    expect(response.body).toHaveProperty("events");
  });
});

describe("PATCH /creators/", function() {
  test("Updates a single a creator's name", async function() {
    const response = await request(app)
      .patch(`/creators/`)
      .send({
        user_email: TEST_DATA.currentEmail,
        _token: TEST_DATA.userToken,
        twitter_handle: "@eschoppik"
      });
    expect(response.body).toEqual({
      creator: {
        instagram_handle: null,
        profile_image_url: null,
        subscription_enabled: null,
        subscription_price: null,
        twitter_handle: "@eschoppik",
        user_email: "test@rithmschool.com"
      }
    });
  });

  // TODO: Add validation so this test passes!
  xtest("Prevents a bad creator update", async function() {
    const response = await request(app)
      .patch(`/creators/`)
      .send({
        _token: TEST_DATA.userToken,
        cactus: false
      });
    expect(response.statusCode).toBe(400);
  });
});

afterEach(async function() {
  await afterEachHook();
});

afterAll(async function() {
  await afterAllHook();
});
