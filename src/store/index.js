import { configureStore } from "@reduxjs/toolkit";
import modalSignInReducer from "./ModalSignInSlice";
import modalSignUpReducer from "./ModalSignUpSlice";
import authReducer from "./AuthSlice";
import toggleColorModeReducer from "./ToggleColorMode";

const store = configureStore({
  reducer: {
    modalVisible: modalSignInReducer,
    modalSignUpVisible: modalSignUpReducer,
    auth: authReducer,
    toggleColorMode: toggleColorModeReducer,
  },
});

export default store;
