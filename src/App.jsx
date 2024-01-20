// Import the React library, which allows us to define components
import React from "react";

// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 350, md: 800, mediumLarge: 1050, lg: 1600 },
  },
  palette: {
    primary: {
      main: "#008080",
      dark: "#045D5D",
      light: "#00ADAD",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            "&:hover": {
                backgroundColor: "primary.dark",
            },
        },
      },
    },
  },
});

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start", lg: "center" }, ml: { xs: "0rem", md: "1rem", lg: "0rem" } }}>
        <Box sx={{ width: { xs: "90%", md: "95%" , lg: "85%"}}}>
          <Players />
        </Box>
      </Box>  
    </ThemeProvider>
  );
}

// Export the App component as the default export
export default App
