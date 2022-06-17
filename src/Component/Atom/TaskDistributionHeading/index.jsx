import * as React from "react";
import { Typography, Button, Box } from "@mui/material";
import useStyles from "./style";

export default function TaskDistributionHeading() {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: "20px" }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Task Distribution
        </Typography>
        <Box>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "black",
              fontWeight: "bold",
            }}
          >
            This Week
          </Button>
          <Button
            className={classes.btn}
            sx={{
              textTransform: "capitalize",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Last Week
          </Button>
        </Box>
      </Box>
    </>
  );
}
