import { IPostDataSource } from "../../data-access";

interface IPostService {
  postDataSource: IPostDataSource;
}

export const MakePostService = ({ postDataSource }: IPostService) => {
  return {
    getPosts: async () => {
      return await postDataSource.getAllPosts();
    },
    getPostsByAuthor: async (author: string) => {
      return await postDataSource.getPostById(author);
    },
    getPostById: async (postId: string) => {
      return await postDataSource.getPostById(postId);
    },
    getPostByPath: async (path: string) => {
      return await postDataSource.getPostByPath(path);
    },
  };
};
