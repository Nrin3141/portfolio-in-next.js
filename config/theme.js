import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
export const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: "#4CAF50"
    }
  },
  overrides: {
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    },
    MuiPaper: {
      root: {
        padding: "20px"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});
