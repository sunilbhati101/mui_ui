import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { COLORS } from "../../Color/Color";

export default function HomeCard() {
  return (
    <>
      <Box sx={{ mb: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Box
                p="16px 16px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Button color="action" endIcon={<ArrowDropDownIcon />}>
                  Today
                </Button>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Box mb={2}>
                  <Typography color="primary" variant="h2">
                    25
                  </Typography>
                  <Typography color="primary" variant="h3">
                    Due Tasks
                  </Typography>
                </Box>
                <Typography color="text.secondary">Completed: 7</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Box
                p="16px 16px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Button sx={{ color: "text.secondary" }}>Overdue</Button>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Box mb={2}>
                  <Typography color="error" variant="h2">
                    4
                  </Typography>
                  <Typography color="error" variant="h3">
                    Tasks
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  Yesterday's overdue: 2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Box
                p="16px 16px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Button sx={{ color: "text.secondary" }}>Issues</Button>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Box mb={2}>
                  <Typography color={COLORS.yellow} variant="h2">
                    32
                  </Typography>
                  <Typography color={COLORS.yellow} variant="h3">
                    Open
                  </Typography>
                </Box>
                <Typography color="text.secondary">Closed today: 0</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Box
                p="16px 16px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Button sx={{ color: "text.secondary" }}>Features</Button>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Box mb={2}>
                  <Typography color={COLORS.green} variant="h2">
                    42
                  </Typography>
                  <Typography color={COLORS.green} variant="h3">
                    Proposals
                  </Typography>
                </Box>
                <Typography color="text.secondary">Implemented: 8</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
