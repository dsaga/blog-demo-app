import { Posts as PostsFeature } from "../../features/posts/Posts";
import { useGetPosts } from "../../features/posts/useGetPosts";
import styles from "./PostsPage.module.css";

export function PostsPage() {
  const { data } = useGetPosts();

  return (
    <div data-testid="posts-page" className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Posts</h1>

      {data && <PostsFeature data={data} />}
    </div>
  );
}
