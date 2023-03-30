import { useEffect } from "react";
import { ICommentEntity, ICreateCommentDto } from "shared-entities-module";
import { useApi } from "../../services/useApi";

export function useSaveComment(post_id?: number) {
  const { data, fetch } = useApi<ICommentEntity, ICreateCommentDto>(
    `posts/${post_id}/comments`,
    "POST"
  );

  return { saved: data.response, save: fetch };
}
