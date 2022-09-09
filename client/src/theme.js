import { createTheme } from "@mui/material/styles";
//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#006396',
          light: '#5487e8',
        },
        secondary: {
          main: '#2c363a',
        },
        background: {
          default: '#f8faff',
          paper: '#EAEAE9',
        },
        text: {
          primary: '#323332',
        },
        error: {
          main: '#f44336',
        },
        warning: {
          main: '#ff9800',
        },
        info: {
          main: '#2196f3',
        },
        success: {
          main: '#4caf50',
        },
         divider: "rgba(0,0,0,0.12)",
  },
  typography: {
    fontFamily: "Roboto",
    button: {
      fontWeight: 700,
      lineHeight: 2.04,
    },
    caption: {
      fontSize: "0.8rem",
    },
    overline: {
      fontSize: "0.7rem",
    },
    body2: {
      fontSize: "0.9rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1.1rem",
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;