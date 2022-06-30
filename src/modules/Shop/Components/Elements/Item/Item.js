import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "../../../../../Styled/Button";
import { Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomImg = styled("img")`
  max-width: 280px;
  max-height: 220px;
  min-height: 220px;
`;

const CustomGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = ({ title, imgSrc, price }) => {
  return (
    <Container sx={{ width: "300px", height: "350px" }}>
      <Grid container>
        <CustomGridItem item xs={12} xl={12}>
          <CustomImg src={imgSrc} alt="laptop" />
        </CustomGridItem>
        <CustomGridItem item xs={12} xl={12}>
          <h2>{title}</h2>
        </CustomGridItem>
        <CustomGridItem item xs={12} xl={12}>
          <h2>{price}</h2>
        </CustomGridItem>
        <CustomGridItem item xs={12} xl={12}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartOutlinedIcon fontSize="small" />}
          >
            ADD TO CART
          </Button>
        </CustomGridItem>
      </Grid>
    </Container>
  );
};

export default Item;
