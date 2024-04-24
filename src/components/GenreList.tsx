import React from "react";
import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { isLoading, data, error } = useGenres();
  return (
    <>
      {isLoading && <Text>is loading...</Text>}
      {error && <Text>{error}</Text>}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={"10px"}>
            <HStack>
              <Image
                borderRadius={"4px"}
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
