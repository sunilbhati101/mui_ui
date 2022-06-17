import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, Typography } from "@mui/material";
import AvatarImg from "../../../assests/Avatar.jpg";

export default function DrawerCard() {
  return (
    <>
      <Card elevation={0} sx={{ p: "20px", backgroundColor: "#111827" }}>
        <Avatar
          alt="Alec Thompson"
          src={AvatarImg}
          sx={{
            width: "100px",
            height: "100px",
            m: "0 auto 10px",
          }}
        />
        <CardContent>
          <Typography variant="body1" textAlign="center" color="white">
            Abbott Keitch
          </Typography>
          <Typography
            variant="subtitle2"
            component="h6"
            color="white"
            textAlign="center"
          >
            admin@fusetheme.com
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
