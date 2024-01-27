import {
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Button,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
	const { data: genres, error, isloading } = useGenre();
	return (
		<div>
			{isloading && <Spinner />}
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id} paddingY={1}>
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								borderRadius={8}
							/>
							<Button
								variant="link"
								onClick={() => {
									onSelectGenre(genre);
								}}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default GenreList;
