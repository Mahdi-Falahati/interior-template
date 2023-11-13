import { grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function CustomTheme({ children }) {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          grey: {
            main: grey[800],
            dark: grey[900],
          },
        },
      })}
    >
      {children}
    </ThemeProvider>
  );
}
