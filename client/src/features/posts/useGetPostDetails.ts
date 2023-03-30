import { useEffect } from "react";
import { useApi } from "../../services/useApi";
import { IGetPostDto } from "shared-entities-module";

export function useGetPostDetails(path?: string) {
  const { data, fetch } = useApi<IGetPostDto>(`post-path/${path}`, "GET");

  useEffect(() => {
    if (path) {
      fetch();
    }
  }, [path]);

  return { data: data.response, reload: fetch };
}
