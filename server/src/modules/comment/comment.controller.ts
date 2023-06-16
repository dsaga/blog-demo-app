import { Request, Response } from "express";
import { ICommentEntity, ICreateCommentDto } from "shared-entities-module";
import { RequestStatus } from "../../utils/request/request-status.enum";
import { commentService } from "./";

export const CommentController = {
  getComments: async function (req: Request, res: Response) {
    try {
      const comments = await commentService.getCommentsForPostId(
        parseInt(req.params.id)
      );
      res.status(RequestStatus.SUCCESS).json(comments);
    } catch (err: any) {
      console.error(err)
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
  deleteComment: async function (req: Request, res: Response) {
    try {
      await commentService.deleteComment(parseInt(req.params.id));
      res.status(RequestStatus.SUCCESS).json({ message: "Comment deleted" });
    } catch (err: any) {
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
  updateComment: async function (req: Request, res: Response) {
    try {
      await commentService.updateComment(parseInt(req.params.id), req.body);
      res.status(RequestStatus.SUCCESS).json({ message: "Comment updated" });
    } catch (err: any) {
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
  createComment: async function (
    req: Request<{}, {}, ICreateCommentDto>,
    res: Response
  ) {
    try {
      const comment = req.body.comment as ICommentEntity;
      comment.id = 0;
      await commentService.createComment(comment);
      res.status(RequestStatus.SUCCESS).json({ message: "Comment created" });
    } catch (err: any) {
      res.status(RequestStatus.BAD_REQUEST).json({ message: err.message });
    }
  },
};
