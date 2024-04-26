import React from "react";
import { Platform } from "./useGames";
import platforms from "../data/platforms";

const usePlatforms = () => ({ data: platforms, isLoading: false, error: "" });

export default usePlatforms;
