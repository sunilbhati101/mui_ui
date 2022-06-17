import * as React from "react";
import WellComeCard from "../../Molecule/WellcomeCard/Index";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid } from "@mui/material";
import useStyles from "./style";

export default function Wellcome() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box mb={5}>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <WellComeCard />
            </Grid>
            <Grid item xs={12} md={4} textAlign={{ xs: "start", md: "end" }}>
              <Box>
                <Button
                  variant="contained"
                  // color= "Black"
                  size="large"
                  startIcon={<EmailIcon />}
                  sx={{ mr: 1, borderRadius: 25 }}
                >
                  Messages
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SettingsIcon />}
                  sx={{ borderRadius: 25 }}
                >
                  Settings
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button size="large" endIcon={<KeyboardArrowDownIcon />} className={classes.acmeBtn}>
            ACME Corp. Backend App
          </Button>
        </Box>
        <Divider />
      </Box>
    </>
  );
}
