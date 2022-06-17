import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

export default function DrawerDashboard() {
  return (
    <>
      <List sx={{ p: "20px 14px" }}>
        <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  color="primary"
                  variant="overline"                  
                >
                  Dashboards
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography color="white" variant="caption">
                  Unique dashboard designs
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentTurnedInOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Projct" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PieChartOutlineOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
      </List>
    </>
  );
}
