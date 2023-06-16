import { MakeCommentService } from "./comment.service";
export { CommentController } from "./comment.controller";

import { commentDataSource } from "../../data-access";

export const commentService = MakeCommentService({ commentDataSource });


export type { ICommentEntity } from "./comment.entity";