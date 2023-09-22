import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Cairo", sans-serif',
  },
});

export const primaryColor = "#E30613";
export const greyColor = "#c4c4c4";
export const greenColor = "#36b700";
export const yellowColor = "#f9b905";

export const navBarTextStyle = {
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    color: primaryColor,
  },
};
