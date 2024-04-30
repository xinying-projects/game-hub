import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import client, { FetchResponse } from "../services/client";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => {
  const fetchGenres = async () => {
    const { data } = await client.get<FetchResponse<Genre>>("/genres");
    return data;
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
