import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const { isLoading, data, error, hasNextPage, fetchNextPage } =
    useGames(gameQuery);

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner marginY={3} />}
    >
      <SimpleGrid spacing={5} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* <InfiniteScroll dataLength={data?.pages.length}> */}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
        {/* </InfiniteScroll> */}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
