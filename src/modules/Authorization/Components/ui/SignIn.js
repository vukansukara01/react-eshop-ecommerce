import { styled } from "@mui/material/styles";
import { Button, Container, TextField, Typography, Box } from "@mui/material";

const CustomContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 450px;
  background: #ffffff;
  border-radius: 10px;
`;

const CustomBox = styled(Box)`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CustomBoxButton = styled(Box)`
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
`;

const Title = styled(Typography)`
  font-size: 32px;
  color: #272727;
`;

const Input = styled(TextField)`
  margin-top: 20px;
  & .MuiOutlinedInput-root {
    color: #272727;
    &:hover fieldset {
      border-color: purple;
    }
  }
  ,
  &:hover {
    //background: purple;
  }
  .MuiInputBase-root {
    &:hover {
      color: ${(props) => props.theme.palette.primary};
    }
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  margin: auto;
`;

const CustomInputWrapper = styled(Box)`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {
  CustomContainer,
  CustomBox,
  CustomBoxButton,
  Title,
  Input,
  CustomButton,
  CustomInputWrapper,
};
