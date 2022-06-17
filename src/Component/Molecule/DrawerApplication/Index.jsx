import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Button from "@mui/material/Button";

export default function DrawerApplication() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <List sx={{ p: "20px 14px" }}>
        <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography color="primary" variant="overline">
                  Application
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography color="white" variant="caption">
                  Custom made application designs
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>

        <ListItemButton>
          <ListItemIcon>
            <SchoolOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Academy" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CalendarTodayOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChatOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="E-Commerce" />
          {open ? (
            <ExpandMore />
          ) : (
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="Products " />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="Products Details " />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="New Products " />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="Order " />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <CloudOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="File Manager" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <SupportOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
          {open ? (
            <ExpandMore b />
          ) : (
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="Home " />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="FAQs " />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="Guddes " />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemText primary="Support " />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <MailOutlineOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Mail" />
          {
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{
                borderRadius: "30px",
                minWidth: "auto",
                p: "2px 9px",
                lineHeight: "1.6",
                fontSize: "10px",
                m: " 0 10px",
              }}
            >
              27
            </Button>
          }
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <RateReviewOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GridViewOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Scrumboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <TaskAltOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Task" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleOutlinedIcon color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </>
  );
}
