import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
	return (
		<div className="App">
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg : `"nav nav" "aside main"`
      }}>
				<GridItem area="nav" >
					<Navbar/>
				</GridItem>
				<Show above="lg">
          <GridItem area="aside" bg="#778373">
            Aside
          </GridItem>
        </Show>
				<GridItem area="main">
					<GameGrid/>
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
