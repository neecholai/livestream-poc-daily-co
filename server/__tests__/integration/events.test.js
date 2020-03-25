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

beforeEach(async () => {
  await beforeEachHook(TEST_DATA);
});

describe("POST /events", function() {
  test("Creates a new event", async function() {
    const response = await request(app)
      .post(`/events`)
      .send({
        _token: TEST_DATA.creatorToken,
        name: "Another test event!",
        start_time: "10:12:12",
        start_date: "December 2, 2020"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      event: {
        id: expect.any(Number),
        name: "Another test event!",
        start_date: "2020-12-02T08:00:00.000Z",
        start_time: "10:12:12",
        duration: null,
        description: null,
        price: null,
        post_signup_description: null,
        photo_url: null,
        creator_email: "test@rithmschool.com"
      }
    });
  });

  // TODO: Add validation to make the test pass!
  xtest("Prevents creating a event without required fields", async function() {
    const response = await request(app)
      .post(`/events`)
      .send({
        _token: TEST_DATA.creatorToken
      });
    expect(response.statusCode).toBe(400);
  });
});

describe("GET /events", async function() {
  // TODO: Make sure this includes a list of users attending when implemented!
  test("Gets a list of 1 event", async function() {
    const response = await request(app).get(`/events`);
    const events = response.body.events;
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({
      id: expect.any(Number),
      name: "test event",
      start_date: "2020-03-30T07:00:00.000Z",
      start_time: "10:00:00"
    });
  });
});

describe("GET /events/:id", function() {
  test("Gets a single a event", async function() {
    const response = await request(app)
      .get(`/events/${TEST_DATA.eventId}`)
      .send({ _token: TEST_DATA.creatorToken });
    expect(response.body).toEqual({
      event: {
        id: expect.any(Number),
        creator_email: "test@rithmschool.com",
        description: null,
        duration: null,
        name: "test event",
        photo_url: null,
        post_signup_description: null,
        price: null,
        signups: [],
        start_date: "2020-03-30T07:00:00.000Z",
        start_time: "10:00:00"
      }
    });

    expect(response.body.event.id).toBe(TEST_DATA.eventId);
  });

  test("Responds with a 404 if it cannot find the event in question", async function() {
    const response = await request(app)
      .get(`/events/9999`)
      .send({ _token: TEST_DATA.creatorToken });
    expect(response.statusCode).toBe(404);
  });
});

describe("PATCH /events/:id", function() {
  test("Updates a single a event's title", async function() {
    const response = await request(app)
      .patch(`/events/${TEST_DATA.eventId}`)
      .send({ name: "new event!", _token: TEST_DATA.creatorToken });
    
      expect(response.body).toEqual({
      event: {
        creator_email: "test@rithmschool.com",
        description: null,
        duration: null,
        id: expect.any(Number),
        name: "new event!",
        photo_url: null,
        post_signup_description: null,
        price: null,
        start_date: "2020-03-30T07:00:00.000Z",
        start_time: "10:00:00"
      }
    });
  });

  // TODO: Add validation to fix this test!
  xtest("Prevents a bad event update", async function() {
    const response = await request(app)
      .patch(`/events/${TEST_DATA.eventId}`)
      .send({
        _token: TEST_DATA.creatorToken,
        cactus: false
      });
    expect(response.statusCode).toBe(400);
  });

  // TODO: Get this test to pass!
  xtest("Responds with a 404 if it cannot find the event in question", async function() {
    // delete event first - Implement this!
    await request(app)
      .delete(`/events/${TEST_DATA.eventId}`)
      .send({
        _token: TEST_DATA.creatorToken,
        title: "instructor"
      });
    const response = await request(app)
      .patch(`/events/${TEST_DATA.eventId}`)
      .send({
        _token: TEST_DATA.creatorToken,
        title: "instructor"
      });
    expect(response.statusCode).toBe(404);
  });
});

afterEach(async function() {
  await afterEachHook();
});

afterAll(async function() {
  await afterAllHook();
});
