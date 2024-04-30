import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import client, { FetchResponse } from "../services/client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  release: string;
  rating: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = async () => {
    const { data } = await client.get<FetchResponse<Game>>("/games", {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.searchText,
      },
    });
    return data;
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
