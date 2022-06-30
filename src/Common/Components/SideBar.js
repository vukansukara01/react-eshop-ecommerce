import {
  Box,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { styled } from "@mui/material/styles";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const CustomBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const CustomListSubheader = styled(ListSubheader)`
  background: ${(props) => props.theme.palette.primary.main};
`;

const CustomListItemButton = styled(ListItemButton)`
  border: 1px solid ${(props) => props.theme.palette.primary.main};
`;

const CustomListItemText = styled(ListItemText)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const CustomExpandLess = styled(ExpandLess)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const CustomExpandMore = styled(ExpandMore)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const CustomListItemIcon = styled(ListItemIcon)`
  min-width: 30px;
`;

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <CustomBox>
      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <CustomListSubheader component="div" id="nested-list-subheader">
            <Typography sx={{ color: "white" }} variant="p">
              Filters
            </Typography>
          </CustomListSubheader>
        }
      >
        {/*First Item*/}
        <CustomListItemButton
          onClick={() => setSelectedOption(selectedOption === 1 ? 0 : 1)}
        >
          <CustomListItemIcon>
            <LocalOfferIcon />
          </CustomListItemIcon>
          <CustomListItemText primary="Price range" />
          {selectedOption === 1 ? <CustomExpandLess /> : <CustomExpandMore />}
        </CustomListItemButton>
        <Collapse in={selectedOption === 1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CustomListItemButton sx={{ pl: 4 }}>
              <CustomListItemIcon>
                <CreditCardIcon />
              </CustomListItemIcon>
              <CustomListItemText primary="With credit card" />
            </CustomListItemButton>
          </List>
        </Collapse>
        {/*Second Item*/}
        <CustomListItemButton
          onClick={() => setSelectedOption(selectedOption === 2 ? 0 : 2)}
        >
          <CustomListItemIcon>
            <PrecisionManufacturingIcon />
          </CustomListItemIcon>
          <CustomListItemText primary="Manufacturer" />
          {selectedOption === 2 ? <CustomExpandLess /> : <CustomExpandMore />}
        </CustomListItemButton>
        <Collapse in={selectedOption === 2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CustomListItemButton sx={{ pl: 4 }}>
              <CustomListItemIcon>
                <CreditCardIcon />
              </CustomListItemIcon>
              <CustomListItemText primary="With credit card" />
            </CustomListItemButton>
          </List>
        </Collapse>
        {/*Third Item*/}
        <CustomListItemButton
          onClick={() => setSelectedOption(selectedOption === 3 ? 0 : 3)}
        >
          <CustomListItemIcon>
            <LocalOfferIcon />
          </CustomListItemIcon>
          <CustomListItemText primary="Price range" />
          {selectedOption === 3 ? <CustomExpandLess /> : <CustomExpandMore />}
        </CustomListItemButton>
        <Collapse in={selectedOption === 3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CustomListItemButton sx={{ pl: 4 }}>
              <CustomListItemIcon>
                <CreditCardIcon />
              </CustomListItemIcon>
              <CustomListItemText primary="With credit card" />
            </CustomListItemButton>
          </List>
        </Collapse>
      </List>
    </CustomBox>
  );
};

export default SideBar;
