import { Router } from "express";
import { CommentController } from "../modules/comment/comment.controller";
import { PostController } from "../modules/post/post.controller";

const router = Router();

router
  .route("/posts/:id/comments/:id")
  .delete(CommentController.deleteComment)
  .put(CommentController.updateComment);

router
  .route("/posts/:id/comments")
  .get(CommentController.getComments)
  .post(CommentController.createComment);

router.route("/posts").get(PostController.getPosts);
router.route("/post-path/:path").get(PostController.getPostByPath);
router.route("/posts/:id").get(PostController.getPostById);

export default router;
