import { signIn, signInWithGoogle } from "../Repository/AuthRepository";

export function signInHandler(email, password, loggedInHandler) {
  signIn(email, password, loggedInHandler);
}

export function signInWithGoogleHandler() {
  signInWithGoogle();
}
