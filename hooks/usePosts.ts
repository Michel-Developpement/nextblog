import { useQuery } from "react-query";

export const usePosts = () => {
  return useQuery({
    queryKey: "posts",
    queryFn: async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      return data;
    },
  });
};
