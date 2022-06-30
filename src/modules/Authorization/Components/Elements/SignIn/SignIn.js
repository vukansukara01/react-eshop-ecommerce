import { authActions } from "../../../../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
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
import {
  signInHandler,
  signInWithGoogleHandler,
} from "../../../Service/AuthService";

const SignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loggedInHandler = () => {
    dispatch(authActions.setAuthLoggedIn());
    navigate("/admin");
  };



  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = data.Email;
    const password = data.Password;
    signInHandler(email, password);
    console.log(data);
  };

  return (
    <CustomContainer sx={{ boxShadow: 24, p: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomBox>
          <Title variant="h6">Sign in</Title>
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
              Sign In
            </CustomButton>
          </CustomBoxButton>
        </CustomBox>
      </form>
      <CustomBoxButton>
        <CustomButton variant="contained" onClick={signInWithGoogleHandler}>
          Sign In with google
        </CustomButton>
      </CustomBoxButton>
    </CustomContainer>
  );
};

export default SignIn;
