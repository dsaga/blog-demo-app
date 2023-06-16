
import { ICommentEntity } from "../modules/comment/comment.entity";
import { IPostEntity } from "../modules/post/post.entity";
import mockData from "../utils/mock/mockData.json";

export interface IDataSource {
  posts: IPostEntity[];
  comments: ICommentEntity[];
}

import { makeCommentDataSource } from "./comment.data";
import { makePostDataSource } from "./post.data";

const commentDataSource = makeCommentDataSource({
  dataSource: mockData as IDataSource,
});

const postDataSource = makePostDataSource({
  dataSource: mockData as IDataSource,
});

// export types 
export type { ICommentDataSource } from "./comment.data";
export type { IPostDataSource } from "./post.data";


export { commentDataSource, postDataSource };
