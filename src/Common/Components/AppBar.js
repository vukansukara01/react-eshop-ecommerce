import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../assets/Icons/eshopWhite.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import SignIn from "../../modules/Authorization/Components/Elements/SignIn/SignIn";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../Styled/Wrapper.styled";
import {
  Buttons,
  CustomAppBar,
  CustomToolBar,
  CustomButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  CustomBoxNav,
} from "./ui/AppBar";
import SignUp from "../../modules/Authorization/Components/Elements/SignUp/SignUp";

function PrimarySearchAppBar({ toggleTheme }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const auth = useSelector((state) => state.auth.auth);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  console.log(auth, "Is auth true");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={2} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //////////////////////////// DESKTOP /////////////////////////////////////////////
  return (
    <CustomBoxNav sx={{ flexGrow: 1, color: "theme.palette.primary.dark" }}>
      <CustomAppBar position="static">
        <Wrapper>
          <CustomToolBar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => navigate("/")}
            >
              <img style={{ width: "67px" }} src={logo} alt="logo" />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="disabled" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-between",
                },
              }}
            >
              {auth && (
                <>
                  <IconButton
                    onClick={() => {
                      toggleTheme();
                    }}
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={4} color="error">
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={2} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={() => navigate("/admin")}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </>
              )}
              {!auth && (
                <Buttons>
                  <CustomButton
                    color="secondary"
                    variant="outlined"
                    onClick={handleOpen}
                  >
                    Sign in
                  </CustomButton>
                  <Modal open={open} onClose={handleClose}>
                    <SignIn handleClose={handleClose} />
                  </Modal>

                  <CustomButton
                    color="secondary"
                    variant="outlined"
                    onClick={handleOpenSignup}
                  >
                    Sign up
                  </CustomButton>
                  <Modal open={openSignup} onClose={handleCloseSignup}>
                    <SignUp />
                  </Modal>
                </Buttons>
              )}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </CustomToolBar>
        </Wrapper>
      </CustomAppBar>
      {renderMobileMenu}
      {renderMenu}
    </CustomBoxNav>
  );
}

export const StyledAppBar = PrimarySearchAppBar;
