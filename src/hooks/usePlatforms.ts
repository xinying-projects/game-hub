import React from "react";
import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => useData<Platform>("/platforms");

export default usePlatforms;
