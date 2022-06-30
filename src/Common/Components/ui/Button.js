import { styled } from "@mui/material/styles";
import { Button } from "@mui";

const StyledButton = styled(Button)``;

// const CustomButton = ({ text }) => {
//   return <StyledButton>{text}</StyledButton>;
// };

const CustomButtonDrago = styled(Button)(({ theme, drago }) => ({
  background: drago,
}));

export default CustomButtonDrago;
