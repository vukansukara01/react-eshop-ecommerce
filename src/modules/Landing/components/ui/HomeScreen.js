import { styled } from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";

const WhiteBackground = styled(Box)`
  width: 95%;
  background: white;
  height: 70%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cube = styled(Box)`
  width: 103px;
  height: 81px;
  position: absolute;
  bottom: 0;
  left: 0;

  ${(props) => props.theme.breakpoints.down("xl")} {
    display: none;
  }
`;

const Content = styled(Box)`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  ${(props) => props.theme.breakpoints.down("xl")} {
    flex-direction: column;
    padding: 30px 0;
  }
`;

const CustomTypography = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const LandingLeft = styled(Box)`
  width: 40%;

  ${(props) => props.theme.breakpoints.down("xl")} {
    width: 80%;
    text-align: center;
  }
`;

const LandingRight = styled(Box)`
  width: 50%;

  ${(props) => props.theme.breakpoints.down("xl")} {
    width: 60%;
    display: flex;
    justify-content: center;
  }

  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 65%;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 75%;
  }
`;

const Buttons = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down("xl")} {
    width: 50%;
    margin: auto;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 80%;
  }

  ${(props) => props.theme.breakpoints.down("s")} {
    width: 100%;
  }
`;

const CustomButtonContained = styled(Button)`
  background: ${(props) => props.theme.palette.primary.dark};
  width: 208px;

  ${(props) => props.theme.breakpoints.down("xl")} {
    margin-right: 10px;
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 175px;
  } ;
`;

const CustomButtonOutlined = styled(Button)`
  color: ${(props) => props.theme.palette.primary.light};
  width: 208px;

  ${(props) => props.theme.breakpoints.down("xl")} {
    margin-left: 10px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 175px;
  }
`;

export {
  WhiteBackground,
  Cube,
  Content,
  LandingLeft,
  LandingRight,
  CustomTypography,
  Buttons,
  CustomButtonContained,
  CustomButtonOutlined,
};
