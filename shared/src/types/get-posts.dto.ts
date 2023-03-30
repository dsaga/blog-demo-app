import { IPostEntity } from "../entities/post.entity";

export interface IGetPostsDto extends GetPostsDto {}

export class GetPostsDto {
  posts: IPostEntity[];
  commentsCount: {
    [postId: string]: number;
  };

  constructor(getPostsDto: IGetPostsDto) {
    Object.assign(this, getPostsDto);
  }
}
