import { useParams } from "react-router-dom";
import { Comments as CommentsFeature } from "../../features/comments/Comments";
import { CommentForm as CommentFormFeature } from "../../features/comments/CommentForm";
import { PostDetails as PostDetailsFeature } from "../../features/posts/PostDetails";
import { useGetPostDetails } from "../../features/posts/useGetPostDetails";

import styles from "./PostDetailsPage.module.css";
import { useSaveComment } from "../../features/comments/useSaveComment";
import { useEffect } from "react";

export function PostDetailsPage() {
  const { path } = useParams<{ path: string }>();
  const { reload, data } = useGetPostDetails(path);
  const { saved, save } = useSaveComment(data?.post.id);

  useEffect(() => {
    if (saved) {
      reload();
    }
  }, [saved]);

  return (
    <div className={styles.pageContainer}>
      {data && <PostDetailsFeature data={data} />}
      {data && <CommentsFeature comments={data.comments} />}
      {data && <CommentFormFeature post={data.post} handleSave={save} />}
    </div>
  );
}
