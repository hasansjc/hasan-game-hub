import { Heading, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { Genre } from "../hooks/useGenre";

interface Props {
	selectedplatform: Platform |null;
	selectedGenre: Genre | null;
}
const GameHeading = ({ selectedplatform, selectedGenre }: Props) => {
	return (
		<div>
			<Heading marginY={5}>
				{selectedplatform?.name} {selectedGenre?.name} Games
			</Heading>
		</div>
	);
};

export default GameHeading;
