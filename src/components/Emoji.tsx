import React from "react";

import meh from "../assets/emojis/meh.webp";
import thumbsUp from "../assets/emojis/thumbs-up.webp";
import bullsEye from "../assets/emojis/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

const Emoji = ({ rating }: Props) => {
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
