import request from "supertest";
import express from "express";
import routes from "../../routes"; // Import your Express app instance here
import { commentDataSource } from "../../data-access";
import { commentsMock } from "shared-entities-module";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api", routes); //routes

jest.mock("../../data-access", () => ({
  ...jest.requireActual("../../data-access"),
  commentDataSource: { getCommentsByPostId: jest.fn() },
}));

describe("CommentController", () => {
  test("should return a 200 when comments exist", async () => {
    // Mock the data source
    (commentDataSource.getCommentsByPostId as jest.Mock).mockImplementation(
      () => Promise.resolve(commentsMock)
    );

    const response = await request(app).get("/api/posts/1/comments");
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(commentsMock);
  });
});
