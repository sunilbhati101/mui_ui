import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Concept",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Design",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Development",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Extras",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Marketing",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-radar-chart-rjoc6";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          {/* <PolarRadiusAxis /> */}
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

// import * as React from "react";
// import { Card, Box, CardActions, CardContent, Typography, Button, } from "@mui/material";

// export default function Example() {
//   return (
//     <>
//       <Box>
//         <Typography>hello</Typography>
//       </Box>
//     </>
//   );
// }
