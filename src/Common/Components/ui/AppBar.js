import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "&.MuiOutlinedInput-root": {
    color: theme.palette.common.white,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "theme.palette.primary.main",
  fill: theme.palette.primary.main,
  zIndex: 99,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: theme.palette.text.dark,
    background: theme.palette.text.main,
    padding: theme.spacing(1, 1, 1, 6),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const CustomBoxNav = styled(Box)`
  background: ${(props) => props.theme.palette.primary.main};
  padding: 0;
`;

const CustomAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    max-width: 1440px;
    position: relative;
    margin: auto;
    box-shadow: none;
    background: ${(props) => props.theme.palette.secondary.mainGradient};
  }
`;

const CustomToolBar = styled(Toolbar)`
  &.MuiToolbar-root {
    padding: 10px 25px;
    box-shadow: none;
    background: ${(props) => props.theme.palette.primary.main};
    // background: ${(props) => props.theme.palette.secondary.mainGradient};

    &.MuiPaper-root {
      box-shadow: none;
    }
  }
`;

const CustomButton = styled(Button)`
  // background: ${(props) => props.theme.palette.secondary.main};
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export {
  Buttons,
  CustomAppBar,
  CustomToolBar,
  CustomButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  CustomBoxNav,
};
