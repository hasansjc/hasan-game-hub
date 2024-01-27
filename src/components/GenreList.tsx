import { Genre } from "../hooks/useGenre";
import useGenre from "../hooks/useGenre";
const GenreList = () => {
	const { data: genres, error, isloading } = useGenre();
	return (
		<div>
			<ul>
				{genres.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
