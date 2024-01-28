import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedplatform, setselectedplatform] = useState<Platform | null>(
		null
	);

	const handleSelectGenre = (genre: Genre): void => {
		console.log(genre);
		setSelectedGenre(genre);
	};
	const handleSelectedPlatform = (platform: Platform): void => {
		console.log(platform);
		setselectedplatform(platform);
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
					<Navbar />
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5} overflowY="auto" height="100vh">
						<GenreList
							onSelectGenre={handleSelectGenre}
							selectedGenre={selectedGenre}
						/>
					</GridItem>
				</Show>
				<GridItem area="main" overflowY="auto" height="100vh">
					<PlatformSelector
						selectedplatform={selectedplatform}
						onSelectPlatform={handleSelectedPlatform}
					/>
					<GameGrid
						selectedGenre={selectedGenre}
						selectedPlatform={selectedplatform}
					/>
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
