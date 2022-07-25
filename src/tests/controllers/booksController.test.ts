import request from "supertest";
import app from "../../app";
import connect, { MockDb } from "../fixtures/mockdb";

let mockdb: MockDb;
beforeAll(async () => {
  mockdb = await connect();
});
afterAll(async () => {
  await mockdb.closeDatabase();
});
afterEach(async () => {
  await mockdb.clearDatabase();
});

describe("test booksController", () => {
  test("test route /books", async () => {
    const response = await request(app).get("/books");
    expect(response.status).toBe(200);
  });
});
