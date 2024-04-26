import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

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
          {game.name}
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
