import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import genres from "../data/genres";
import ApiClient from "../services/client";
import Genre from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getData,
    staleTime: ms("24 hrs"), // 24h
    initialData: genres,
  });
};

export default useGenres;
