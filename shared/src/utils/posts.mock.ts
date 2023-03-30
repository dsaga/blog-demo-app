import { IPostEntity } from "../entities/post.entity";

export const postsMock = Object.freeze([
  {
    id: 1,
    title: "10 Tips for Better Sleep",
    description:
      "Learn how to get a better night's sleep with these simple tips.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus mauris, eu consectetur risus. Sed varius vel velit id consequat. Sed pellentesque odio ipsum, in aliquam lacus eleifend a. Nulla facilisi. Morbi vel elit elit. Sed malesuada aliquam est, et pretium enim sodales ut. Sed suscipit velit velit, a auctor orci sagittis vel. Duis eget risus lorem. Donec semper bibendum ante in auctor. Donec eu rhoncus sapien.",
    path: "/blog/sleep-tips",
    author: "John Doe",
  },
  {
    id: 2,
    title: "The Benefits of Meditation",
    description: "Discover the many benefits of a regular meditation practice.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus mauris, eu consectetur risus. Sed varius vel velit id consequat. Sed pellentesque odio ipsum, in aliquam lacus eleifend a. Nulla facilisi. Morbi vel elit elit. Sed malesuada aliquam est, et pretium enim sodales ut. Sed suscipit velit velit, a auctor orci sagittis vel. Duis eget risus lorem. Donec semper bibendum ante in auctor. Donec eu rhoncus sapien.",
    path: "/blog/meditation-benefits",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "How to Build a Successful Business",
    description: "Learn the key strategies for building a successful business.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id luctus mauris, eu consectetur risus. Sed varius vel velit id consequat. Sed pellentesque odio ipsum, in aliquam lacus eleifend a. Nulla facilisi. Morbi vel elit elit. Sed malesuada aliquam est, et pretium enim sodales ut. Sed suscipit velit velit, a auctor orci sagittis vel. Duis eget risus lorem. Donec semper bibendum ante in auctor. Donec eu rhoncus sapien.",
    path: "/blog/business-success",
    author: "Bob Johnson",
  },
]) as IPostEntity[];
