import React from "react";
import useData from "./useData";
import { Genre } from "./useGenres";
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
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre ? selectedGenre.slug : null,
        parent_platforms: selectedPlatform ? selectedPlatform.id : null,
      },
    },
    [selectedGenre?.slug, selectedPlatform?.slug]
  );

export default useGames;
