import React from "react";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { isLoading, data, error } = useGenres();

  // if (isLoading) return <Spinner />;
  // if (error) return null;

  return (
    <>
      <Heading marginBottom={2} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} py={"10px"}>
            <HStack>
              <Image
                objectFit="cover"
                borderRadius={"4px"}
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize={"md"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
