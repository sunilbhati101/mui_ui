import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderIconLeft from "../../Atom/HeaderIconLeft";
import HeaderAvatar from "../../Molecule/CardHeaderLeft";
import Container from "@mui/material/Container";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FlegImg from "../../../assests/flag.png";
import { Button } from "@mui/material";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";
import DrawerMenu from "../../Molecule/Drawer/Index";
import Wellcome from "../Wellcome/Index";
import BasicTabs from "../Tabs/Index";

const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar disableGutters>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ pl: 4, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderIconLeft />
          <Box display="flex" alignItems="center" ml="auto">
            <Box display={{ xs: "none", sm: "flex" }}>
              <Button>
                <img src={FlegImg} alt="Flag-img" />
                <Typography ml= {1} color="text.secondary">
                  EN
                </Typography>
              </Button>
              <IconButton>
                <TextFieldsIcon />
              </IconButton>
              <IconButton>
                <FullscreenExitIcon />
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <BookmarkAddedOutlinedIcon />
              </IconButton>
              <IconButton>
                <Badge color="primary" variant="dot">
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>
            <HeaderAvatar />
            <Box display={{ xs: "none", md: "block" }}>
              <IconButton
                sx={{
                  p: "20px 22px",
                  borderRadius: "0",
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                }}
              >
                <ForumOutlinedIcon sx={{ color: "White" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerMenu open={open} setOpen={setOpen} />
      <Container>
        <Main open={open}>
          <Box pt="80px">
            {/* <DrawerHeader /> */}
            <Wellcome />
            <BasicTabs />
          </Box>
        </Main>
      </Container>
    </Box>
  );
}
