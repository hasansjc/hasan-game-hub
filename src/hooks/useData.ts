import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
	count: number;
	results: T[];
}
const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, seterror] = useState("");
	const [isloading, setloading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setloading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
			.then((res) => {
				setData(res.data.results);
				setloading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				seterror(err.message);
				setloading(false);
			});

		return () => {
			controller.abort();
		};
	}, []);
	return { data, error, isloading };
};

export default useData;
