import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";

import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"}>
      <CardBody p={0}>
        <Image src={game.background_image} />
      </CardBody>
      <CardFooter>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
