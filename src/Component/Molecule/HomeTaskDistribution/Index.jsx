import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Example from "../../Atom/TaskChar/index";
// import HomeTaskNum from "../../Atom/HomeTaskNum/index";
import HomeSchedule from "../../Atom/HomeSchedule/index";
// import TaskDistributionHeading from "../../Atom/TaskDistributionHeading/index";
import TaskTest from "../TaskTest/index";

export default function TaskDistribution() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} >
            <Card >
              <TaskTest />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <HomeSchedule />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
