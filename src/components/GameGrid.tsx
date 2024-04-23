import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { isLoading, games, error } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log(isLoading);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid p={10} spacing={4} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
