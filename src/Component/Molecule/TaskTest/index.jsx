import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Example from "../../Atom/TaskChar/index";
import HomeTaskNum from "../../Atom/HomeTaskNum/index";
import TaskDistributionHeading from "../../Atom/TaskDistributionHeading/index";

export default function TaskTest() {
  return (
    <>
      <Box>
        <TaskDistributionHeading />
        <Example />
        <Divider />
        <HomeTaskNum />
      </Box>
    </>
  );
}
