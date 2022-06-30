import React, { useState, useEffect } from "react";
import classes from "./Search.module.scss";
import db from "../../../firebase.config";

const Search = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = db.collection("eShop/products/items/");
    const data = await response.get();
    data.docs.forEach((item) => {
      setItems([item.data()]);
    });
  };

  const onSearchingHandler = (event) => {
    setSearchTerm(event.target.value);
    setVisible(true);
    if (!event.target.value) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const results = items[0]?.items.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
    console.log(results, "Results");
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={classes.main}>
      <input
        type="text"
        placeholder={"Search"}
        value={searchTerm}
        onChange={onSearchingHandler}
      />
      {visible && (
        <ul>
          {searchResults?.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
