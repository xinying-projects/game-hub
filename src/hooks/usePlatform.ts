import React from "react";
import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();

  const platform = platforms?.results.find((p) => p.id === platformId);
  return {
    platform,
  };
};

export default usePlatform;
