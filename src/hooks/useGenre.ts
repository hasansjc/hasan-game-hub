import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
	id: number;
	name: string;
    slug: string;
}

interface FetchGenreResponse {
	count: number;
	results: Genre[];
}
const useGenres = () => {
	const [genres, setGenre] = useState<Genre[]>([]);
    const [error, seterror] = useState("");
    const [isloading, setloading] = useState(false);
    
	useEffect(() => {
        const controller = new AbortController();
        setloading(true)
		apiClient
			.get<FetchGenreResponse>("/genres", { signal: controller.signal })
			.then((res) => {
                setGenre(res.data.results);
                setloading(false)
			})
			.catch((err) => {
                if (err instanceof CanceledError) return;
				seterror(err.message);
                setloading(false)
			});

		return () => {
			controller.abort();
		};
	}, []);
	return { genres, error, isloading };
};

export default useGenres;
