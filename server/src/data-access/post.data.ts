import { IDataSource } from "../data-access";
import { IPostEntity } from "../modules/post/post.entity";

interface IMakePostDataSource {
  dataSource: IDataSource;
}

export interface IPostDataSource {
  getAllPosts: () => Promise<IPostEntity[]>;
  getPostById: (id: string) => Promise<IPostEntity | undefined>;
  getPostByAuthor: (author: string) => Promise<IPostEntity | undefined>;
  getPostByPath: (path: string) => Promise<IPostEntity | undefined>;
}

export function makePostDataSource({
  dataSource,
}: IMakePostDataSource): IPostDataSource {
  return {
    getAllPosts: async () => {
      return dataSource.posts;
    },
    getPostById: async (id) => {
      return new Promise((resolve) =>
        resolve(dataSource.posts.find((post) => post.id === parseInt(id)))
      );
    },
    getPostByAuthor: async (author) => {
      return new Promise((resolve) =>
        resolve(dataSource.posts.find((post) => post.author === author))
      );
    },
     getPostByPath: async (path) => {
        return new Promise((resolve) =>
            resolve(dataSource.posts.find((post) => post.path === path || post.path === `/blog/${path}`))
        );
    },
  };
}
