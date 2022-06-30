import React from "react";
import SignUp from "../modules/Authorization/Components/Elements/SignUp/SignUp";
import SignIn from "../modules/Authorization/Components/Elements/SignIn/SignIn";
import HomeUser from "../modules/Shop/Shop.js/Shop";

export const homeRoute = {
  name: "",
  path: "/",
  exact: true,
  main: () => <HomeUser />,
};

const routes = [
  { name: "Sign up", path: "/", exact: true, main: () => <SignUp /> },
  { name: "Sign in", path: "/", exact: true, main: () => <SignIn /> },
];

export default routes;
