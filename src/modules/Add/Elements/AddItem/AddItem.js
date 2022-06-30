import React, { useState } from "react";
import classes from "./AddItem.module.scss";
import db from "../../../../firebase.config";
import firebase from "firebase";
import { storage } from "../../../../firebase.config";
import {Button} from "@mui/material";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const itemRef = db
    .collection("eShop")
    .doc("products")
    .collection("items")
    .doc("CQAGu8EvXW7JwK8gGQip");

  const addItem = (name, price, producer, type, url) => {
    itemRef
      .update({
        items: firebase.firestore.FieldValue.arrayUnion({
          name: name,
          price: price,
          producer: producer,
          type: type,
          image: url,
        }),
      })
      .then(() => {
        console.log("Document updated");
      })
      .catch((error) => {
        console.error("Error updating doc", error);
      });
  };

  const uploadImage = async () => {
    return new Promise(function (resolve, reject) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
          reject();
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeProducer = (event) => {
    setProducer(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleImageImport = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = await uploadImage();
    addItem(name, price, producer, type, url);
  };

  return (
    <div className={classes.main}>
      <form onSubmit={handleSubmit}>
        <div className={classes.title}>
          <h2>Add Item</h2>
        </div>
        <div className={classes.product}>
          <label htmlFor="productName">Enter name:</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Iphone 13 Pro 128GB"
          />
        </div>
        <div className={classes.product}>
          <label htmlFor="productName">Enter price:</label>
          <input
            type="text"
            value={price}
            onChange={handleChangePrice}
            placeholder="999,00$"
          />
        </div>
        <div className={classes.product}>
          <label htmlFor="productName">Enter producer:</label>
          <input
            type="text"
            value={producer}
            onChange={handleChangeProducer}
            placeholder="apple"
          />
        </div>
        <div className={classes.product}>
          <label htmlFor="productName">Enter type:</label>
          <input
            type="text"
            value={type}
            onChange={handleChangeType}
            placeholder="phone"
          />
        </div>
        <div className={classes.product}>
          <label htmlFor="productImage">Browse image</label>
          <input
            type="file"
            className={classes.fileUpload}
            onChange={handleImageImport}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
