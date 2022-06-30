import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { authActions } from "../../../../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CustomContainer,
  CustomBox,
  CustomBoxButton,
  Title,
  Input,
  CustomButton,
  CustomInputWrapper,
} from "../../ui/SignIn";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const [error, setErrors] = useState("");

  const auth = useSelector((state) => state.auth.auth);

  useEffect(() => {
    console.log(auth, "cukannnn");
  }, [auth]);

  const dispatch = useDispatch();

  const loggedInHandler = () => {
    dispatch(authActions.setAuthLoggedIn());
  };

  const navigate = useNavigate();

  const signUp = (email, password) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) loggedInHandler();
            navigate("/admin");
          })
          .catch((e) => {
            setErrors(e.message);
          });
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
            navigate("/admin");
            loggedInHandler();
          })
          .catch((e) => setErrors(e.message));
      });
  };

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = data.Email;
    const password = data.Password;
    signUp(email, password);
    console.log(data);
  };

  return (
    <CustomContainer sx={{ boxShadow: 24, p: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomBox>
          <Title variant="h6">Sign up</Title>
          <CustomInputWrapper>
            <Controller
              name="Email"
              control={control}
              defaultValue=""
              rules={{ required: "Email required" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Email"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  size="small"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="Password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  variant="outlined"
                  label="Password"
                  type="password"
                  value={value}
                  onChange={onChange}
                  size="small"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </CustomInputWrapper>

          <CustomBoxButton>
            <CustomButton variant="contained" type="submit">
              Sign Up
            </CustomButton>
          </CustomBoxButton>
        </CustomBox>
      </form>
      <CustomBoxButton>
        <CustomButton variant="contained" onClick={signInWithGoogle}>
          Sign in with google
        </CustomButton>
      </CustomBoxButton>
    </CustomContainer>
  );
};

export default SignUp;
