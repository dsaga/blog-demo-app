import { MakeCommentService } from "./comment.service";
export { CommentController } from "./comment.controller";

import { commentDataSource } from "../../data-access";

export const commentService = MakeCommentService({ commentDataSource });


// export types from module

export type { ICommentEntity } from "./comment.entity";