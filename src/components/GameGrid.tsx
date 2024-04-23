import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { isLoading, games, error } = useGames();

  return (
    <>
      {isLoading && <Text>loading...</Text>}
      {error && <Text>{error}</Text>}
      <SimpleGrid p={10} spacing={4} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
