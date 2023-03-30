
export interface IPostEntity extends PostEntity {}

export class PostEntity {
  id: number;
  title: string;
  content: string;
  description: string;
  path: string;
  author: string;

  constructor(comment: IPostEntity) {
    Object.assign(this, comment);
  }
}
