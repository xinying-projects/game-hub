import React from "react";
import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} px={20}>
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
