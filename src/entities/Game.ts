import { Platform } from "./Platform";

export interface Game {
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
}
