import React from "react";
import Background from "../ui/Backgroung";
import Wrapper from "../../../../Styled/Wrapper.styled";
import {
  WhiteBackground,
  Cube,
  Content,
  LandingLeft,
  CustomTypography,
  Buttons,
  CustomButtonContained,
  CustomButtonOutlined,
  LandingRight,
} from "../ui/HomeScreen";
import DotsCube from "../../../../assets/Images/DotsCube.png";
import LandingHero from "../../../../assets/Images/landingHero.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Wrapper sx={{ marginTop: "60px" }}>
        <WhiteBackground>
          <Cube>
            <img src={DotsCube} alt="cube" />
          </Cube>
          <Content>
            <LandingLeft>
              <CustomTypography variant="h3">ELECTRONIC SHOP</CustomTypography>
              <CustomTypography variant="body1">
                NOW IN OUR SHOP
              </CustomTypography>
              <CustomTypography
                sx={{ marginTop: "50px", marginBottom: "50px" }}
              >
                Iphone 13 Pro. The biggest Pro camera system upgrade ever. Super
                Retina XDR display with ProMotion for a faster, more responsive
                feel. Lightning-fast A15 Bionic chip. Super Fast 5G.¹ Durable
                design and a huge leap in battery life.
              </CustomTypography>
              <Buttons>
                <CustomButtonContained
                  variant="contained"
                  onClick={() => navigate("/shop")}
                >
                  SHOP NOW
                </CustomButtonContained>
                <CustomButtonOutlined variant="outlined">
                  READ BLOG
                </CustomButtonOutlined>
              </Buttons>
            </LandingLeft>

            <LandingRight>
              <img style={{ width: "100%" }} src={LandingHero} alt="Hero" />
            </LandingRight>
          </Content>
        </WhiteBackground>
      </Wrapper>
    </Background>
  );
};

export default Home;
