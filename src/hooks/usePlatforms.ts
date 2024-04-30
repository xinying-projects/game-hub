import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import client, { FetchResponse } from "../services/client";
import { Platform } from "./useGames";

const usePlatforms = () => {
  const fetchPlatforms = async () => {
    const { data } = await client.get<FetchResponse<Platform>>(
      "/platforms/lists/parents"
    );
    return data;
  };

  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
