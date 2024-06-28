// import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Habits from "./components/Habits";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: `"iransans"`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Habits />
      </ThemeProvider>
    </>
  );
}

export default App;
