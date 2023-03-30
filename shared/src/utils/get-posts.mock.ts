import { IGetPostsDto } from "get-posts.dto";
import { postsMock } from "./posts.mock";

export const getPostsMock: IGetPostsDto = Object.freeze({
  posts: postsMock,
  commentsCount: {
    [postsMock[0].id]: 2,
    [postsMock[1].id]: 1,
    [postsMock[2].id]: 3,
  },
});
