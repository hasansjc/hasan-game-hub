
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import  { Platform } from "../hooks/usePlatforms";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const {
		data: games,
		error,
		isloading,
	} = useGames(selectedGenre, selectedPlatform);
	const Skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<div>
			{error && <Text> {error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
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
