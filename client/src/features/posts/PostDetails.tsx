import styles from "./PostDetails.module.css";
import { IGetPostDto } from "shared-entities-module";

interface IPostDetails {
  data: IGetPostDto;
}

export function PostDetails({ data }: IPostDetails) {

  return (
    <div className={styles.postDetails}>
      {data.post && (
        <>
          <h1 className={styles.postTitle}>{data.post.title}</h1>
          <div className={styles.postBody}>
            <p className={styles.postContent}>{data.post.content}</p>
          </div>
        </>
      )}
    </div>
  );
}
