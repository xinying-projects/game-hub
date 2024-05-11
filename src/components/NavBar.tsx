import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <HStack marginBottom={5}>
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit={"cover"} />
        </Link>
        <SearchBar />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
