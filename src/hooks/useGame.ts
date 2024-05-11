import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/client";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24 hrs"), // 24h
  });
};

export default useGame;
