import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  root: {},
});

const Section = props => {
  const { children, bgColor, maxWidth, color } = props;
  const classes = styles();
  return (
    <div style={{ backgroundColor: bgColor }}>
      <Container maxWidth={maxWidth}>
        <Box py={10} textAlign="center" style={{ color: color }}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export default Section;