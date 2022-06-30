import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import firebase from "firebase";
import firebaseConfig from "./firebase.config";
import "antd/dist/antd.css";
import { authActions } from "./store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider } from "@mui/styles";
import Wrapper from "./Styled/Wrapper.styled";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { StyledAppBar } from "./Common/Components/AppBar";
import { deepPurple, grey, yellow } from "@mui/material/colors";
import Shop from "./modules/Shop/Shop.js/Shop";
import HomeAdmin from "./modules/Add/Components/HomeAdmin";
import Home from "./modules/Landing/components/Home/Home";
import Footer from "./Common/Components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.setAuthLoggedIn());
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) loginHandler();
  });

  const toggleTheme = () => {
    setMode((mode) => (mode == "light" ? "dark" : "light"));
  };

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#290781",
              mainGradient:
                "linear-gradient(56.31deg, #5E35B1 0%, #280680 100%)",
              light: "#5930ac",
              dark: "#280680",
            },
            secondary: {
              main: deepPurple[50],
              mainGradient:
                "radial-gradient(92.8% 245.01% at 3.05% 81.82%, #5E35B1 0%, #290781 99.99%, #280680 100%);",
            },
            text: {
              main: "#fff",
              dark: "#272727",
            },
            disabled: {
              main: "#c7c2c2",
            },
          }
        : {
            // palette values for dark mode
            primary: yellow,
            divider: yellow[700],
            background: {
              default: grey[800],
              paper: grey[900],
            },
            text: {
              primary: grey[300],
              secondary: grey[600],
            },
          }),
    },
    typography: {
      h2: {
        fontSize: "5rem",
      },
    },
    breakpoints: {
      values: {
        xs: 375,
        s: 560,
        md: 768,
        lg: 1090,
        xl: 1260,
        xxl: 1366,
      },
    },
  });

  // useEffect(() => {
  //   return () => {
  //     firebaseConfig.auth.
  //     firebaseConfig.auth.onTokenChanged((user) => {
  //       console.log("DRAGOMIR: " + user);
  //     });
  //   };
  // }, []);

  const theme = createTheme(getDesignTokens(mode));

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledAppBar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/shop" element={<Shop />} exact />
          <Route path="/admin" element={<HomeAdmin />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
