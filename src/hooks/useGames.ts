import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import ApiClient, { FetchResponse } from "../services/client";
import Game from "../entities/Game";
import useGameQueryStore from "../stores/GameQueryStore";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.getData({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.order,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    staleTime: ms("24 hrs"), // 24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
