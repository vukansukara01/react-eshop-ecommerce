import React from "react";
import Items from "../Components/Items/Items";
import SideBar from "../../../Common/Components/SideBar";
import { Grid } from "@mui/material";
import CustomContainer from "../../../Styled/Container";

const Shop = () => {
  return (
    <CustomContainer>
      <Grid sx={{ display: "flex" }}>
        <Grid
          item
          sx={{ padding: 0, display: { xs: "none", sm: "none", md: "flex" } }}
          md={3}
          xl={3}
        >
          <SideBar />
        </Grid>
        <Grid item sx={{ padding: 0 }} xs={12} sm={12} xl={9}>
          <Items />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Shop;
