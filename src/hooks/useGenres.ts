import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import genres from "../data/genres";
import ApiClient from "../services/client";

const apiClient = new ApiClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getData,
    staleTime: ms("24 hrs"), // 24h
    initialData: genres,
  });
};

export default useGenres;
