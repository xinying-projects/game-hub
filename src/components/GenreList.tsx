import React from "react";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { isLoading, data, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={"10px"}>
            <HStack>
              <Image
                objectFit="cover"
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
