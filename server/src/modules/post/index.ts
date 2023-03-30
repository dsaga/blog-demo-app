import { postDataSource } from "../../data-access";
import { MakePostService } from "./post.service";

export const postService = MakePostService({ postDataSource });


// export type from module 
export type { IPostEntity } from "./post.entity";