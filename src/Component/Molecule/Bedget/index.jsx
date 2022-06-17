import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, Box, } from "@mui/material";
import Example from "../../Atom/BudgetChart/index";

export default function BedgetPage() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card>
            <Example />
            </Card>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
