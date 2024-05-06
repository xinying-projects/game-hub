import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });
};

export default useGenres;
