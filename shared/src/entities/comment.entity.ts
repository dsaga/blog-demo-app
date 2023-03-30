// comment should be a class and interface with properties: id, text, author, post_id

export interface ICommentEntity extends CommentEntity {}

export class CommentEntity {
  id: number;
  text: string;
  author: string;
  post_id: number;

  constructor(comment: ICommentEntity) {
    Object.assign(this, comment);
  }
}
