import { useEffect } from "react";
import { useApi } from "../../services/useApi";
import { IGetPostsDto } from "shared-entities-module";

export function useGetPosts() {
    const { data, fetch } = useApi<IGetPostsDto>("posts", "GET");

    useEffect(() => { 
      fetch();
    }, []);

    return { data: data.response };
}