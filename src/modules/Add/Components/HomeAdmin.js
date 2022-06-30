import React from "react";
import AddItem from "../Elements/AddItem/AddItem";
import {Button, Typography} from "@mui/material";
import { LogOutHandler } from "../Service/LogOutService";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const HomeAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setAuthLoggedOut = () => {
    dispatch(authActions.setAuthLoggedOut());
  };

  const onClickHandler = () => {
    return LogOutHandler(), setAuthLoggedOut(), navigate("/");
  };

  return (
    <div>
      <Typography variant="h6" color="primary">
        Hello there, your are logged in
      </Typography>
      <AddItem />
      <div style={{width: '100%', margin: '20px auto 20px auto', display: 'flex', justifyContent: 'center'}}><Button variant="contained" color="secondary"onClick={onClickHandler}>Log out</Button></div>
    </div>
  );
};

export default HomeAdmin;
