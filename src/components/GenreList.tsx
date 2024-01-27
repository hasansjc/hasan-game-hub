import React from "react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
	const { genres, error, isloading } = useGenres();
    return <div>
        <ul>
            {genres.map(genre => (
                <li key={genre.id}>{ genre.name}</li>
            ))}
        </ul>
    </div>;
};

export default GenreList;
