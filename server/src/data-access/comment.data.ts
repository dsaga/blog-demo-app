import { IDataSource } from "./";
import {
  CommentEntity,
  ICommentEntity,
} from "../modules/comment/comment.entity";

interface IMakeCommentDataSource {
  dataSource: IDataSource;
}

export interface ICommentDataSource {
  getAllComments: () => Promise<ICommentEntity[]>;
  getCommentsByPostId: (id: number) => Promise<ICommentEntity[]>;
  getCommentsByAuthor: (author: string) => Promise<ICommentEntity[]>;
  updateComment: (id: number, text: string) => Promise<ICommentEntity>;
  deleteComment: (id: number) => Promise<ICommentEntity>;
  createComment: (comment: ICommentEntity) => Promise<ICommentEntity>;
}

export function makeCommentDataSource({
  dataSource,
}: IMakeCommentDataSource): ICommentDataSource {
  return {
    getAllComments: () => {
      return new Promise((resolve) => resolve(dataSource.comments));
    },
    getCommentsByPostId: (id: number) => {
      return new Promise((resolve) =>
        resolve(dataSource.comments.filter((comment) => comment.post_id === id))
      );
    },
    getCommentsByAuthor: (author: string) => {
      return new Promise((resolve) =>
        resolve(
          dataSource.comments.filter((comment) => comment.author === author)
        )
      );
    },
    deleteComment: (id: number) => {
      return new Promise((resolve) => {
        const comment = dataSource.comments.find(
          (comment) => comment.id === id
        );
        if (comment) {
          dataSource.comments.splice(dataSource.comments.indexOf(comment), 1);
          resolve(comment);
        }
      });
    },
    updateComment: (id: number, text: string) => {
      return new Promise((resolve) => {
        const comment = dataSource.comments.find(
          (comment) => comment.id === id
        );
        if (comment) {
          comment.text = text;
          resolve(comment);
        }
      });
    },
    createComment: (comment: ICommentEntity) => {
      return new Promise((resolve) => {
        const newComment = new CommentEntity(comment);
        newComment.id = dataSource.comments.length + 1;
        dataSource.comments.push(newComment);
        resolve(newComment);
      });
    },
  };
}
