import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomeCard from "../../Molecule/TabHomeCard/Index";
import TeamCard from "../../Molecule/TeamCard/Index";
import GithubSummary from "../../Molecule/GithubSummary/Index";
import TaskDistribution from "../../Molecule/HomeTaskDistribution/Index";
import BedgetPage from "../../Molecule/Bedget/index";
import useStyles from "./Style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box p={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className={classes.tabs}
        >
          <Tab
            label="Home"
            {...a11yProps(0)}
            disableRipple
            sx={{
              color: "text.secondary",
            }}
          />
          <Tab
            label="Budget"
            {...a11yProps(1)}
            disableRipple
            sx={{
              color: "text.secondary",
            }}
          />
          <Tab
            label="Team"
            {...a11yProps(2)}
            disableRipple
            sx={{
              color: "text.secondary",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HomeCard />
        <GithubSummary />
        <TaskDistribution />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BedgetPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TeamCard />
      </TabPanel>
    </Box>
  );
}
