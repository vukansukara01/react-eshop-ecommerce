import fire from "../../../firebase.config";

export async function getProductData() {
  let productData = [];
  let db = fire.firestore();

  await db
    .collection("eShop/products/")
    .get()
    .then((langContentCollection) => {
      langContentCollection.forEach((doc) => {
        productData.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((error) => {
      console.error("Error fetching document: ", error);
    });

  return productData;
}
