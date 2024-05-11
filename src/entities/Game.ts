import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

interface Game {
  id: number;
  name: string;
  release: string;
  rating: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  publishers: Publisher[];
  genres: Genre[];
}

export default Game;
