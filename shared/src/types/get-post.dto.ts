import { ICommentEntity } from "../entities/comment.entity";
import { IPostEntity } from "../entities/post.entity";

export interface IGetPostDto extends GetPostDto {}

export class GetPostDto {
  post: IPostEntity;
  comments: ICommentEntity[];

  constructor(getPostDto: IGetPostDto) {
    Object.assign(this, getPostDto);
  }
}
