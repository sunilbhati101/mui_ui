import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { COLORS } from "../../Color/Color";
import useStyles from "./Style";
import Example from "../../Atom/Chart/Index";

export default function GithubSummary() {
  const classes = useStyles();
  return (
    <>
      <Box p={2.5} mb={4} boxShadow={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Github Issues Summary
          </Typography>
          <Box>
            <Button
              sx={{
                color: "text.secondary",
              }}
            >
              This Week
            </Button>
            <Button
              className={classes.btn}
              sx={{
                color: "text.secondary",
              }}
            >
              Last Week
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Example />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Overview</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  borderRadius={2.5}
                  textAlign="center"
                  p="30px 0"
                  mb={2.5}
                  sx={{ backgroundColor: "#e8eaf6" }}
                >
                  <Typography variant="h4" color={COLORS.Blue}>
                    214
                  </Typography>
                  <Typography variant="body2" color={COLORS.Blue}>
                    New Issues
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Grid item xs={12} sm={6}>
                    <Box
                      p="30px 0px"
                      textAlign="center"
                      borderRadius={2}
                      sx={{ backgroundColor: "#f6f9fb" }}
                    >
                      <Typography variant="h1">3</Typography>
                      <Typography variant="body1">Fixed</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      textAlign="center"
                      borderRadius={2}
                      ml={2}
                      p="30px 0px"
                      sx={{
                        backgroundColor: "#f6f9fb",
                      }}
                    >
                      <Typography variant="h1">4</Typography>
                      <Typography variant="body1">Won't Fix</Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  borderRadius={2.5}
                  textAlign="center"
                  p="30px 0"
                  mb={2.5}
                  sx={{
                    backgroundColor: "#e8f5e9",
                  }}
                >
                  <Typography variant="h4" color={COLORS.Drakgreen}>
                    75
                  </Typography>
                  <Typography variant="body2" color={COLORS.Drakgreen}>
                    Closed
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Grid item xs={12} sm={6}>
                    <Box
                      textAlign="center"
                      borderRadius={2}
                      p="30px 0px"
                      sx={{ backgroundColor: "#f6f9fb" }}
                    >
                      <Typography variant="h1">8</Typography>
                      <Typography variant="body1">Re-opened</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      textAlign="center"
                      borderRadius={2}
                      ml={2}
                      p="30px 0px"
                      sx={{
                        backgroundColor: "#f6f9fb",
                      }}
                    >
                      <Typography variant="h1">6</Typography>
                      <Typography variant="body1">Needs Triage</Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
