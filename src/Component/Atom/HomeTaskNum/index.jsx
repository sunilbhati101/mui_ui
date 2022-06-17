import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";

export default function HomeTaskNum() {
  return (
    <>
      <Box display="flex">
        <Grid item xs={6}>
          <Box textAlign="center" p="28px 0px">
            <Typography variant="h1">594</Typography>
            <Typography variant="body2">New tasks</Typography>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={6}>
          <Box textAlign="center" p="28px 0px">
            <Typography variant="h1">287</Typography>
            <Typography variant="body2">Completed tasks</Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
