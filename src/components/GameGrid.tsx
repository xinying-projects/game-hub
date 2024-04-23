import React from "react";
import { Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { isLoading, games, error } = useGames();

  return (
    <>
      {isLoading && <Text>loading...</Text>}
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};

export default GameGrid;
