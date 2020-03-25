// npm packages
const request = require("supertest");

// app imports
const app = require("../../app");

// model imports
const User = require("../../models/user");

const {
  TEST_DATA,
  afterEachHook,
  afterAllHook,
  beforeEachHook
} = require("./config");

beforeEach(async function() {
  await beforeEachHook(TEST_DATA);
});

afterEach(async function() {
  await afterEachHook();
});

afterAll(async function() {
  await afterAllHook();
});

describe("POST /users/register", async function() {
  test("Creates a new user", async function() {
    let dataObj = {
      email: "whiskey@rithmschool.com",
      first_name: "Whiskey",
      phone: "1232123",
      last_name: "Lane",
      password: "foo123"
    };
    const response = await request(app)
      .post("/users/register")
      .send(dataObj);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
    const whiskeyInDb = await User.findBy("email", "whiskey@rithmschool.com");
    ["username", "first_name", "last_name"].forEach(key => {
      expect(dataObj[key]).toEqual(whiskeyInDb[key]);
    });
  });

  test("Prevents creating a user with duplicate username", async function() {
    const response = await request(app)
      .post("/users/register")
      .send({
        phone: "1233211212",
        first_name: "Test",
        password: "foo123",
        last_name: "McTester",
        email: "test@rithmschool.com"
      });
    expect(response.statusCode).toBe(400);
  });

  test("Prevents creating a user without required password field", async function() {
    const response = await request(app)
      .post("/users/register")
      .send({
        phone: "1233211212",
        first_name: "Test",
        last_name: "McTester",
        email: "test@rithmschool.com"
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toEqual({
      message: ["Password required"],
      status: 400
    });
  });
});


describe("PATCH /users/", async () => {
  test("Updates a single a user's first_name with a selective update", async function() {
    const response = await request(app)
      .patch(`/users/`)
      .send({ first_name: "xkcd", _token: `${TEST_DATA.userToken}` });
    const user = response.body.user;
    expect(user).toHaveProperty("email");
    expect(user).not.toHaveProperty("password");
    expect(user.first_name).toBe("xkcd");
    expect(user.username).not.toBe(null);
  });

  test("Updates a single a user's password", async function() {
    const response = await request(app)
      .patch(`/users`)
      .send({ _token: `${TEST_DATA.userToken}`, password: "foo12345" });

    const user = response.body.user;
    expect(user).toHaveProperty("email");
    expect(user).not.toHaveProperty("password");
  });

  // TODO: Add validation so this test passes!
  xtest("Prevents a bad user update", async function() {
    const response = await request(app)
      .patch(`/users`)
      .send({ cactus: false, _token: `${TEST_DATA.userToken}` });
    expect(response.statusCode).toBe(400);
  });

  // TODO: Get this test to pass!
  xtest("Forbids a user from editing another user", async function() {
    const response = await request(app)
      .patch(`/users`)
      .send({ password: "foo12345", _token: `${TEST_DATA.userToken}` });
    expect(response.statusCode).toBe(401);
  });

  // TODO: Get this test to pass!
  xtest("Responds with a 404 if it cannot find the user in question", async function() {
    // delete user first
    await request(app)
      .delete(`/users/${TEST_DATA.currentEmail}`)
      .send({ _token: `${TEST_DATA.userToken}` });
    const response = await request(app)
      .patch(`/users/`)
      .send({ password: "foo12345", _token: `${TEST_DATA.userToken}` });
    expect(response.statusCode).toBe(404);
  });
});
