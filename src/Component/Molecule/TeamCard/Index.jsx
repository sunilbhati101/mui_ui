import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import TeamImg from "../../../assests/team.jpg";
import TeamImg2 from "../../../assests/team2.jpg";
import TeamImg3 from "../../../assests/team3.jpg";
import TeamImg4 from "../../../assests/team4.jpg";
import Divider from "@mui/material/Divider";

export default function TeamCard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Avatar
              alt="Alec Thompson"
              src={TeamImg}
              sx={{
                width: "130px",
                height: "130px",
                m: "0 auto 10px",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Nadia Mcknight
              </Typography>
              <Typography color="text.secondary">Project Director</Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ p: 0, justifyContent: "space-around" }}>
              <Button
                startIcon={<MailIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Email
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button
                startIcon={<CallIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Call
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Avatar
              alt="Alec Thompson"
              src={TeamImg2}
              sx={{
                width: "130px",
                height: "130px",
                m: "0 auto 10px",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Misty Ramsey
              </Typography>
              <Typography color="text.secondary">Consultant</Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ p: 0, justifyContent: "space-around" }}>
              <Button
                startIcon={<MailIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Email
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button
                startIcon={<CallIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Call
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Avatar
              alt="Alec Thompson"
              src={TeamImg3}
              sx={{
                width: "130px",
                height: "130px",
                m: "0 auto 10px",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Vickie Mosley
              </Typography>
              <Typography color="text.secondary">Designer</Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ p: 0, justifyContent: "space-around" }}>
              <Button
                startIcon={<MailIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Email
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button
                startIcon={<CallIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Call
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Avatar
              alt="Alec Thompson"
              src={TeamImg4}
              sx={{
                width: "130px",
                height: "130px",
                m: "0 auto 10px",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Best Blackburn
              </Typography>
              <Typography color="text.secondary">Senior Developer</Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ p: 0, justifyContent: "space-around" }}>
              <Button
                startIcon={<MailIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Email
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button
                startIcon={<CallIcon />}
                sx={{
                  p: "16px 0",
                  color: "black",
                }}
              >
                Call
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
