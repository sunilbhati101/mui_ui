import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import LogoImg from "../../../assests/logo.svg";
import DrawerCard from "../../Atom/DrawerCard/Index";
import DrawerDashboard from "../../Atom/DrawerDashboard/Index";
import DrawerApplication from "../DrawerApplication/Index";
import useStyles from "./Style";

const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerMenu({ open, setOpen }) {
  const classes = useStyles();
  // const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className={classes.oe}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#111827",
          color: "#ffffff",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader sx={{ justifyContent: "space-between" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton disableGutters>
              <ListItemIcon>
                <img src={LogoImg} alt="" />
              </ListItemIcon>
              <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon color="disabled" />
          </IconButton>
        </Box>
      </DrawerHeader>
      <Box>
        <DrawerCard />
      </Box>
      <DrawerDashboard />
      <DrawerApplication />
    </Drawer>
  );
}
