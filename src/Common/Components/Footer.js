import React from "react";
import {
  Bottom,
  FooterMain,
  ItemFooter,
  Left,
  Main,
  Right,
  TextFooterPurple,
  TextFooterWhite,
  Wrapper,
} from "./ui/Footer";
import { IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AppleLogo from "../../assets/Icons/appleWhite.png";
import SamsungLogo from "../../assets/Icons/samsungWhite.png";
import HuaweiLogo from "../../assets/Icons/huaweiWhite.png";
import XiaomiLogo from "../../assets/Icons/xiaomiWhite.png";
import {
  LocationIcon,
  LogoApple,
  LogoHuawei,
  LogoSamsung,
  LogoXiaomi,
  MailIcon,
  PhoneIcon,
} from "./ui/Logo";

const Footer = () => {
  return (
    <Main>
      <FooterMain>
        <Wrapper>
          <Left>
            <ItemFooter>
              <IconButton>
                <MailIcon color="text" />
              </IconButton>
              <TextFooterWhite color="white" variant="body1">
                sukaravukan@gmail.com
              </TextFooterWhite>
            </ItemFooter>
            <ItemFooter>
              <IconButton size="medium">
                <PhoneIcon color="text" />
              </IconButton>
              <TextFooterWhite color="white" variant="body1">
                +387 65 205 212
              </TextFooterWhite>
            </ItemFooter>
            <ItemFooter>
              <IconButton size="medium">
                <LocationIcon color="text" />
              </IconButton>
              <TextFooterWhite color="white" variant="body1">
                Banjaluka, Bosnia and Herzegovina
              </TextFooterWhite>
            </ItemFooter>
          </Left>
          <Right>
            <LogoApple src={AppleLogo} alt="AppleLogo" />
            <LogoSamsung src={SamsungLogo} alt="SamsungLogo" />
            <LogoHuawei src={HuaweiLogo} alt="HuaweiLogo" />
            <LogoXiaomi src={XiaomiLogo} alt="XiaomiLogo" />
          </Right>
        </Wrapper>
      </FooterMain>
      <Bottom>
        <TextFooterPurple>Copyright Vukan Sukara @ 2021</TextFooterPurple>
      </Bottom>
    </Main>
  );
};

export default Footer;
