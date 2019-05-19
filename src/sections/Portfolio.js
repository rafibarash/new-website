import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";

// My Components
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const styles = {};

const Portfolio = props => {
  // const { classes } = props;
  const theme = useTheme();
  return (
    <Section
      bgColor={theme.palette.background.default}
      maxWidth="md"
      name="Portfolio"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <Typography paragraph>My Portfolio</Typography>
    </Section>
  );
};

export default withStyles(styles)(Portfolio);
