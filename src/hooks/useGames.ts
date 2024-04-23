import React, { useEffect, useState } from "react";
import client from "../services/client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  release: string;
  rating: number;
}

interface FetchGameResponse {
  results: Game[];
  count: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    client
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then(({ data: { results } }) => {
        setGames(results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {
    isLoading,
    error,
    games,
    setLoading,
    setError,
    setGames,
  };
};

export default useGames;
