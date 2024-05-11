import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getData,
    staleTime: ms("24 hrs"), // 24h
    initialData: platforms,
  });
};

export default usePlatforms;
