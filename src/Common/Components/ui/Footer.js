import { styled } from "@mui/material/styles";

const Main = styled("div")`
  width: 100%;
`;

const FooterMain = styled("div")`
  height: 100%;
  background: ${(props) => props.theme.palette.primary.dark};
`;

const Left = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const Right = styled("div")`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
`;

const Wrapper = styled("div")`
  max-width: 1440px;
  padding: 15px 25px;
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down("s")} {
    padding: 15px 10px;
  }
`;

const ItemFooter = styled("div")`
  display: flex;
  align-items: center;
`;

const TextFooterWhite = styled("p")`
  margin: 0;
  color: white;
  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 10px;
  }
`;

const TextFooterPurple = styled("p")`
  margin: 0;
  color: ${(props) => props.theme.palette.primary.main}
    ${(props) => props.theme.breakpoints.down("md")} {
    font-size: 12px;
  }
`;

const Bottom = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: ${(props) => props.theme.palette.primary.main};
`;

export {
  Wrapper,
  Main,
  FooterMain,
  Left,
  ItemFooter,
  Right,
  Bottom,
  TextFooterWhite,
  TextFooterPurple,
};
