import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Trailer from "../entities/Trailer";
import ApiClient from "../services/client";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getData,
    staleTime: ms("24 hrs"),
  });
};

export default useTrailers;
