import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import client from "../services/client";

interface FetchGameResponse {
  results: Game[];
  count: number;
}

interface Game {
  id: number;
  name: string;
  release: string;
  rating: number;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    client
      .get<FetchGameResponse>("/games")
      .then(({ data: { results } }) => {
        setGames(results);
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
