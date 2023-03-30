import { useEffect } from "react";
import { useApi } from "../../services/useApi";
import styles from "./Posts.module.css"; // Import CSS module stylesheet
import { IGetPostsDto } from "shared-entities-module";
import { Link } from "react-router-dom";
import { useGetPosts } from "./useGetPosts";

interface IPostsProps {
  data: IGetPostsDto;
}

export function Posts({ data }: IPostsProps) {
  return (
    <ul className={styles.postList}>
      {data &&
        data.posts.map((post) => (
          <li data-testid="post" key={post.path} className={styles.post}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postContent}>{post.description}</p>
            <Link to={`${post.path}`} className={styles.postMoreLink}>
              More
            </Link>
            <span className={styles.commentsCount}>
              {post.id in data.commentsCount
                ? data.commentsCount[post.id]
                : "0"}
            </span>
          </li>
        ))}
    </ul>
  );
}
