import React from "react";
import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} px={20}>
        <Image src={logo} h={10} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
