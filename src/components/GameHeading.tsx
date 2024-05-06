import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedGenre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms?.results.find(
    (g) => g.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading as={"h1"}>{heading}</Heading>;
};

export default GameHeading;
