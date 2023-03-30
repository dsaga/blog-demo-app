import { ICommentEntity } from "../entities/comment.entity";

export interface ICreateCommentDto extends CreateCommentDto {}

export class CreateCommentDto {
  comment: Omit<ICommentEntity, "id">;

  constructor(getPostDto: ICreateCommentDto) {
    Object.assign(this, getPostDto);
  }
}
