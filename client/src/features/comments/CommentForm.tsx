import { useState, useTransition } from "react";
import { IPostEntity, CreateCommentDto } from "shared-entities-module";
import styles from "./CommentForm.module.css";

interface ICommentFormProps {
  post: IPostEntity;
  handleSave: (formState: CreateCommentDto) => void;
}

export function CommentForm({ post, handleSave }: ICommentFormProps) {
  const [formState, setFormState] = useState<CreateCommentDto>({
    comment: {
      text: "",
      post_id: post.id,
      author: "",
    },
  });

  const [, startTransition] = useTransition();

  const resetState = () => {
    startTransition(() => {
      setFormState({ comment: { text: "", post_id: post.id, author: "" } });
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    startTransition(() => {
      setFormState((prevState) => ({
        ...prevState,
        comment: { ...prevState.comment, [name]: value },
      }));
    });
  };

  return (
    <form
      data-testid="comment-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave(formState);
        resetState();
      }}
      className={styles.commentForm}
    >
      <div className={styles.InputGroup}>
        <label className={styles.label} htmlFor="text">
          Comment
        </label>
        <input
          onChange={onInputChange}
          type="text"
          id="text"
          value={formState.comment.text}
          name="text"
        />
      </div>

      <div className={styles.InputGroup}>
        <label className={styles.label} htmlFor="author">
          Author
        </label>
        <input
          onChange={onInputChange}
          type="text"
          id="author"
          name="author"
          value={formState.comment.author}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
