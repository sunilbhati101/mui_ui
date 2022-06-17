import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AvatarImg from "../../../assests/Avatar.jpg";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HeaderAvatar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <List disablePadding>
      <ListItem sx={{ pt: "0", pb: "0" }}>
        <ListItemText
          sx={{ textAlign: "end" }}
          primary={
            <React.Fragment>
              <Typography color="black">Abbott Keitch</Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography color="text.secondary" variant="caption">
                Admin
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemAvatar sx={{ textAlign: "end" }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src={AvatarImg}>
                <Avatar />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </ListItemAvatar>
      </ListItem>
    </List>
  );
};

export default HeaderAvatar;
