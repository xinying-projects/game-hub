import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
