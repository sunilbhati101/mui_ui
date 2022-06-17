import * as React from "react";
import { List, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AvatarImg from "../../../assests/Avatar.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function WellComeCard() {
  return (
    <List disablePadding>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar
            src={AvatarImg}
            sx={{
              width: "64px",
              height: "64px",
            }}
          >
            <Avatar />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ ml: 3 }}
          primary={
            <>
              <Typography color="black" variant="h1" component="h1">
                Welcome back, Abbott Keitch!
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                color="text.secondary"
                variant="body2"
                display="flex"
                component="span"
              >
                <NotificationsIcon />
                You have 2 new messages and 15 new tasks
              </Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
}
