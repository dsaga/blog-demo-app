import { useState } from "react";

interface IApiState<T> {
  status: "idle" | "loading" | "error" | "success";
  response: T | null;
}

// second generic should be optional if you want to use it without payload

export function useApi<T, R = null>(path: string, method: string) {
  const [data, setData] = useState<IApiState<T>>({
    status: "idle",
    response: null,
  });

  const fetchApi = async (payload?: R) => {
    setData({ status: "loading", response: null });
    try {
      const response = await fetch(`/api/${path}`, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: method === "GET" ? undefined : JSON.stringify(payload),
      });
      const data = (await response.json()) as T;
      setData({ status: "success", response: data });
    } catch {
      {
        setData({ status: "error", response: null });
      }
    }
  };

  return { data, fetch: fetchApi };
}
