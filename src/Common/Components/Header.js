import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.scss";
import Logo from "../../assets/Images/Logo.png";
import Search from "./Search/Search";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/ModalSignInSlice";
import { modalSignUpActions } from "../../store/ModalSignUpSlice";
import SignUpModal from "../../modules/Authorization/Components/SignUpModal/SignUpModal";
import styled from "styled-components";

const Header = () => {
  const modalVisible = useSelector((state) => state.modalVisible.modalVisible);
  const modalSignUpVisible = useSelector(
    (state) => state.modalSignUpVisible.modalSignUpVisible
  );
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const modalVisibleHandler = () => {
    dispatch(modalActions.setModalVisible());
  };

  const modalNotVisibleHandler = () => {
    dispatch(modalActions.setModalNotVisible);
  };

  const modalSignUpVisibleHandler = () => {
    dispatch(modalSignUpActions.setModalSignUpVisible());
  };

  const modalSignUpNotVisibleHandler = () => {
    dispatch(modalSignUpActions.setModalSignUpNotVisible);
  };

  const ulBtn = styled.ul`
    width: 400px;
    display: flex;
    justify-content: space-between;
  `;

  const container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const isLoggedIn = auth;

  return (
    <div className="header-nav">
      <container>
        <div className="left">
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.mid}>
          <Search />
        </div>
        <div className="right">
          <ulBtn>
            <Button variant="contained" onClick={modalVisibleHandler}>
              Sign In
            </Button>
            <Button variant="contained" onClick={modalSignUpVisibleHandler}>
              Sign Up
            </Button>
            <SignUpModal
              modalSignUpVisible={modalSignUpVisible}
              modalNotVisibleHandler={modalSignUpNotVisibleHandler}
            />
            {isLoggedIn && (
              <li>
                <Link to={"/admin"}>Home Admin</Link>
              </li>
            )}
          </ulBtn>
        </div>
      </container>
    </div>
  );
};

export default Header;
