import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardHeader p={0}>
        <Image src={getCroppedImageUrl(game.background_image)} />
      </CardHeader>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          {game.parent_platforms && (
            <PlatformIconList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
          )}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading marginBottom={1} fontSize={"xl"}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
