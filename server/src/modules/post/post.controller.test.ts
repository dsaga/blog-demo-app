import request from "supertest";
import express from "express";
import routes from "../../routes"; // Import your Express app instance here
import { commentDataSource, postDataSource } from "../../data-access";
import { commentsMock, postsMock } from "shared-entities-module";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api", routes); //routes

jest.mock("../../data-access", () => ({
  ...jest.requireActual("../../data-access"),
  commentDataSource: { getCommentsByPostId: jest.fn() },
  postDataSource: { getAllPosts: jest.fn() },
}));

describe("PostController", () => {
  test("should return a 200 when posts exist", async () => {
    // Mock the data source
    (commentDataSource.getCommentsByPostId as jest.Mock).mockImplementation(
      () => Promise.resolve(commentsMock)
    );

    (postDataSource.getAllPosts as jest.Mock).mockImplementation(() =>
      Promise.resolve(postsMock)
    );

    const response = await request(app).get("/api/posts");
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      posts: postsMock,
      commentsCount: {
        "1": 7,
        "2": 7,
        "3": 7,
      },
    });
  });
});
