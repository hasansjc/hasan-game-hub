import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
	const { data: genres, error, isloading } = useGenre();
	return (
		<div>
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id} paddingY={1}>
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								borderRadius={8}
							/>
							<Text>{genre.name} </Text>
						</HStack>
					</ListItem> 
				))}
			</List>
		</div>
	);
};

export default GenreList;
