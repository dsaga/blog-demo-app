import { ICommentEntity } from "shared-entities-module";
import { CommentDetails } from "./CommentDetails";
import styles from "./Comments.module.css";

interface ICommentProps {
  comments: ICommentEntity[];
}
export function Comments({ comments }: ICommentProps) {
  return (
    <div className={styles.commentsContainer}>
      <h1>Comments</h1>

      {comments.map((comment) => (
        <CommentDetails key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
