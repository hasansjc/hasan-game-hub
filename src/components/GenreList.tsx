import {
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre : Genre | null
}
const GenreList = ({ onSelectGenre,selectedGenre }: Props) => {
	const { data: genres, error, isloading } = useGenre();
	return (
		<div>
			{isloading && <Spinner />}
			<Heading fontSize='2xl' marginY={5}>Genres</Heading>
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id} paddingY={1}>
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								objectFit='cover'
								borderRadius={8}
							/>
							<Button
								variant="link"
								whiteSpace='normal'
								textAlign='left'
                                fontWeight={selectedGenre?.id === genre.id? 'bold': 'normal' }
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
