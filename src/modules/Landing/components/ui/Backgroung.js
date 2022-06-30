import { styled } from "@mui/material/styles";

const Background = styled("div")`
  width: 100%;
  box-shadow: none;
  height: 100%;
  background: ${(props) => props.theme.palette.primary.mainGradient};
  padding-top: 10px;
  padding-bottom: 100px;
`;

export default Background;
