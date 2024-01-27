import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { games, error, isloading } = useGames();
	const Skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<div>
			{error && <Text> {error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={10}
				padding={10}>
				{isloading === true &&
					Skeletons.map((skeleton) => (
						<GameCardContainer>
							{" "}
							<GameCardSkeleton key={skeleton} />{" "}
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />{" "}
					</GameCardContainer>
				))}
			</SimpleGrid>
			;
		</div>
	);
};

export default GameGrid;
