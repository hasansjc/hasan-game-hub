
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import  { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
	gameQuery : GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
	const {
		data: games,
		error,
		isloading,
	} = useGames(gameQuery);
	const Skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<div>
			{error && <Text> {error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 4, xl: 4 }}
				spacing={3}
				padding={10}>
				{isloading === true &&
					Skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
			;
		</div>
	);
};

export default GameGrid;
