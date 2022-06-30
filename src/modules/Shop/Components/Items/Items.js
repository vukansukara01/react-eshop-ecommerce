import React, { useEffect, useState } from "react";
import Item from "../Elements/Item/Item";
import db from "../../../../firebase.config";
import { Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Items = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = db.collection("eShop/products/items/");
    const data = await response.get();
    data.docs.forEach((item) => {
      setItems([item.data()]);
      setIsLoading(false);
    });
  };

  const CustomContainer = styled(Container)`
    width: 100%;
    padding: 0;
    margin: auto;
    max-width: 1440px;
  `;

  return (
    <CustomContainer>
      <Grid container rowSpacing={10}>
        {items[0]?.items.map((item) => (
          <Grid key={item.name} item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Item
              isLoading={isLoading}
              key={item.name}
              title={item.name}
              imgSrc={item.image}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default Items;
