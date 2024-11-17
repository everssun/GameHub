import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { ColorPalette } from "@chakra-ui/react";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024 px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show when={showAside}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
