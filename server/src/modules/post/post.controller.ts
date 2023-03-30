// // revealing module pattern define comment controller as a function
import { Request, Response } from "express";
import { RequestStatus } from "../../utils/request/request-status.enum";
import { postService } from "./";
import { PostEntity } from "./post.entity";
import { GetPostDto, GetPostsDto, IGetPostsDto } from "shared-entities-module";
import { plainToInstance } from "class-transformer";
import { convertEntityDefaults } from "../../utils/response/commonSettings";
import { commentService } from "../comment";

type CommentsCount = { [key: string]: number };

export const PostController = {
  // comment controller is a function that returns an object
  // add types for req and res parameters from express
  getPosts: async function (
    req: Request,
    res: Response
  ): Promise<IGetPostsDto | void> {
    try {
      const posts = plainToInstance(
        PostEntity,
        await postService.getPosts(),
        convertEntityDefaults()
      );

      const postsWithComments = await Promise.all(
        posts.map(async (post) => {
          const comments = await commentService.getCommentsForPostId(post.id);
          return { [post.id]: comments.length };
        })
      );

      res
        .status(RequestStatus.SUCCESS)
        .json(
          new GetPostsDto({
            posts,
            commentsCount: postsWithComments.reduce(
              (acc, curr) => ({ ...acc, ...curr }),
              {}
            ),
          })
        );
    } catch (err: any) {
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
  getPostById: async function (req: Request, res: Response) {
    try {
      const post = plainToInstance(
        PostEntity,
        await postService.getPostById(req.params.id),
        convertEntityDefaults()
      );

      const comments = await commentService.getCommentsForPostId(post.id);

      res
        .status(RequestStatus.SUCCESS)
        .json(new GetPostDto({ post, comments }));
    } catch (err: any) {
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
  getPostByPath: async function (req: Request, res: Response) {
    try {
      const post = plainToInstance(
        PostEntity,
        await postService.getPostByPath(req.params.path),
        convertEntityDefaults()
      );

      const comments = await commentService.getCommentsForPostId(post.id);

      res
        .status(RequestStatus.SUCCESS)
        .json(new GetPostDto({ post, comments }));
    } catch (err: any) {
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
};
