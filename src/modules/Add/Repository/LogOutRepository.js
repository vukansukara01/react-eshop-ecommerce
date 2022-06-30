import firebase from "firebase";

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then((res) => { return res})
    .catch((err) => {
      console.log("error");
    });
};
