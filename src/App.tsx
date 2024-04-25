import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav"
        "main"`,
        lg: `"nav nav"
        "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"} px={5}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} px={5}>
          <GenreList
            onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
