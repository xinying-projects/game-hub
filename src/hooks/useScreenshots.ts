import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Screenshot } from "../entities/Screenshot";
import ApiClient from "../services/client";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getData,
    staleTime: ms("24 hrs"),
  });
};

export default useScreenshots;
