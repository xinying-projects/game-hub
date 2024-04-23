import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge px={2} fontSize={"14px"} borderRadius={"4px"} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
