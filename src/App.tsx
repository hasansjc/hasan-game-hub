import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText : string
}
function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const handleSelectGenre = (genre: Genre): void => {
		setGameQuery({ ...gameQuery, genre });
	};
	const handleSelectedPlatform = (platform: Platform): void => {
		setGameQuery({ ...gameQuery, platform });
	};

	const handleSelectSortOrder = (sortOrder: string): void => {
		setGameQuery({ ...gameQuery, sortOrder });
	};

	return (
		<div className="App">
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}>
				<GridItem area="nav">
					<Navbar onSearch={(searchText) => {
						setGameQuery({...gameQuery, searchText})
					}} />
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5} overflowY="auto" height="100vh">
						<GenreList
							onSelectGenre={handleSelectGenre}
							selectedGenre={gameQuery.genre}
						/>
					</GridItem>
				</Show>
				<GridItem area="main" overflowY="auto" height="100vh">
					<HStack>
						<PlatformSelector
							selectedplatform={gameQuery.platform}
							onSelectPlatform={handleSelectedPlatform}
						/>
						<SortSelector
							onSelectSortOrder={handleSelectSortOrder}
							selectedOrder={gameQuery.sortOrder}
						/>
					</HStack>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
