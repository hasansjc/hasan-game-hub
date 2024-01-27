import { Badge } from "@chakra-ui/react";
interface Props {
	score: number;
}
const CriticScore = ({ score }: Props) => {
	let color = score > 90 ? "green" : score > 80 ? "yellow" : "";
	return (
		<div>
			<Badge colorScheme={color}>{score}</Badge>
		</div>
	);
};

export default CriticScore;
