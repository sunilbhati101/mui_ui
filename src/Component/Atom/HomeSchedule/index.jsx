import * as React from "react";
import { Typography, Button } from "@mui/material";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useStyles from "./style";
// import { COLORS } from "../../Color/Color";

export default function HomeSchedule() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2.5}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Schedule
          </Typography>
          <Box>
            <Button >
              {/*color={COLORS.Black} */}
              Today
            </Button>
            <Button sx={{ color: "text.secondary" }} className={classes.btn}>
              Tomarrow
            </Button>
          </Box>
        </Box>
        <Box>
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Typography variant="body2">Marketing Meeting</Typography>
                }
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon fontSize="small" /> 09:00 AM
                      </Typography>
                      <Typography display="flex" ml={2.5} component="span">
                        <LocationOnIcon fontSize="small" /> Conference room 1A
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Typography variant="body2">Public Announcement</Typography>
                }
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon fontSize="small" /> 11 :00 AM
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={<Typography variant="body2">Lunch</Typography>}
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon fontSize="small" /> 12 : 10 AM
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Typography variant="body2">
                    Meeting with Beta Testers
                  </Typography>
                }
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon fontSize="small" /> 03:00 AM
                      </Typography>
                      <Typography display="flex" ml={2.5} component="span">
                        <LocationOnIcon fontSize="small" /> Conference room 2C
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={<Typography variant="body2">Live Stream</Typography>}
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon fontSize="small" /> 05 : 30 AM
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={<Typography variant="body2">Release Party</Typography>}
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon fontSize="small" /> 07 :30 AM
                      </Typography>
                      <Typography display="flex" ml={2.5} component="span">
                        <LocationOnIcon fontSize="small" /> EO's house
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="arrow">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={<Typography variant="body2">EO's house</Typography>}
                secondary={
                  <>
                    <Box display="flex" component="span">
                      <Typography display="flex" component="span">
                        <AccessTimeFilledIcon
                          color="text.secondary"
                          fontSize="small"
                        />
                        09:30 AM
                      </Typography>
                      <Typography display="flex" ml={2.5} component="span">
                        <LocationOnIcon
                          fontSize="small"
                          color="text.secondary"
                        />
                        CEO's Penthouse
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
