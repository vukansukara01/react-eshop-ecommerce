import firebase from "firebase";

const signIn = (email, password, loggedInHandler) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user) loggedInHandler();
        })
        .catch(() => {});
    });
};

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res, "test res");
        })
        .catch(() => {});
    });
};

export { signIn, signInWithGoogle };
