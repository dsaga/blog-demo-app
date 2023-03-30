import { ICommentEntity } from "shared-entities-module";
import styles from './CommentDetails.module.css'

interface ICommentProps {
    comment: ICommentEntity;
}

export function CommentDetails( { comment }: ICommentProps  ) {
  return (
    <div data-testid="comment-details" className={styles.commentDetailsWrapper}>
      <h3>{comment.author}</h3>
      <p>{comment.text}</p>
    </div>
  );
}