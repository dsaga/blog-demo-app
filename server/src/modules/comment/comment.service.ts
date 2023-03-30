import { ICommentEntity } from "shared-entities-module";
import { ICommentDataSource } from "../../data-access";

interface ICommentService {
  commentDataSource: ICommentDataSource;
}

export const MakeCommentService = ({ commentDataSource }: ICommentService) => {
  return {
    getCommentsForPostId: async (postId: number) => {
      return await commentDataSource.getCommentsByPostId(postId);
    },
    getCommentsByAuthor: async (author: string) => {
      return await commentDataSource.getCommentsByAuthor(author);
    },
    deleteComment: async (id: number) => {
      return await commentDataSource.deleteComment(id);
    },
    updateComment: async (id: number, text: string) => {
      return await commentDataSource.updateComment(id, text);
    },
    createComment: async (comment: ICommentEntity) => { 
      return await commentDataSource.createComment(comment);
    }
  };
};
