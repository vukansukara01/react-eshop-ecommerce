import { styled } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LogoApple = styled("img")`
  margin: 0 20px;
  width: 49px;
  height: 59px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 34px;
    height: 41px;
    margin: 0 10px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 24px;
    height: 29px;
    margin: 0 5px;
  }
`;
const LogoSamsung = styled("img")`
  margin: 0 20px;
  width: 143px;
  height: 21px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 100px;
    height: 14px;
    margin: 0 10px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 70px;
    height: 10px;
    margin: 0 5px;
  }
`;
const LogoHuawei = styled("img")`
  margin: 0 20px;
  width: 55px;
  height: 52px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 39px;
    height: 36px;
    margin: 0 10px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 27px;
    height: 25px;
    margin: 0 5px;
  }
`;
const LogoXiaomi = styled("img")`
  margin: 0 20px;
  width: 82px;
  height: 54px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 56px;
    height: 35px;
    margin: 0 10px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 39px;
    height: 24px;
    margin: 0 5px;
  }
`;

const MailIcon = styled(MailOutlineIcon)`
  font-size: 35px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 28px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 12px;
  }
`;

const PhoneIcon = styled(LocalPhoneIcon)`
  font-size: 35px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 28px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 20px;
  }
`;

const LocationIcon = styled(LocationOnIcon)`
  font-size: 35px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 28px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 20px;
  }
`;

export {
  LogoApple,
  LogoSamsung,
  LogoHuawei,
  LogoXiaomi,
  MailIcon,
  PhoneIcon,
  LocationIcon,
};
