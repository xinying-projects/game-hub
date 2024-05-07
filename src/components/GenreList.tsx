import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/GameQueryStore";

const GenreList = () => {
  const { isLoading, data, error } = useGenres();
  const onSelectGenreId = useGameQueryStore((s) => s.onSelectGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

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
                onClick={() => onSelectGenreId(genre.id)}
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
