import React from "react";
import { Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { isLoading, data, error } = useGenres();
  return (
    <>
      {isLoading && <Text>is loading...</Text>}
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
