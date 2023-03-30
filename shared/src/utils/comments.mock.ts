import { ICommentEntity } from "../entities/comment.entity";

export const commentsMock = Object.freeze([
  {
    id: 1,
    post_id: 1,
    text: "These tips really worked for me, thank you!",
    author: "SleepyHead123",
  },
  {
    id: 2,
    post_id: 1,
    text: "I tried these tips but they didn't work for me.",
    author: "Insomniac456",
  },
  {
    id: 3,
    post_id: 2,
    text: "Meditation has been life-changing for me, highly recommend!",
    author: "ZenMaster789",
  },
  {
    id: 4,
    post_id: 2,
    text: "I've always wanted to try meditation but don't know where to start.",
    author: "CuriousCat",
  },
  {
    id: 5,
    post_id: 2,
    text: "I found this article very informative, thank you!",
    author: "InfoSeeker",
  },
  {
    id: 6,
    post_id: 3,
    text: "These tips are spot on, thank you for sharing!",
    author: "Entrepreneur123",
  },
  {
    id: 7,
    post_id: 3,
    text: "I've tried these strategies but haven't had much success.",
    author: "StrugglingBusinessOwner",
  },
]) as ICommentEntity[];
