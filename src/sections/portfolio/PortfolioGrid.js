import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/styles';
import { Grid, Link, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    // flexGrow: 1,
  },
  item: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    maxWidth: '530px',
    // width: '350px',
    // height: '300px',
    // border: '2px solid black',
  },
  img: {
    // zIndex: '-1',
    width: '100%',
    height: '400px',
    filter: 'brightness(40%)',
    // transition: '0.25 ease-out',
    transition: 'all 0.3s',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
    '&:hover': {
      // clipPath: 'inset(2rem)',
      // transform: 'scale(1.1)',
    },
  },
  caption: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'fade-out(gray, 0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    padding: '0 15px',
    textAlign: 'left',
    color: 'white',
    zIndex: '1',
  },
  captionContent: {
    color: 'white',
    margin: 'auto 2rem 2rem',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  descr: {},
});

const PortfolioItem = ({ item, classes }) => (
  <Grid item xs={12} md={6}>
    <div className={classes.item}>
      <Link href="https://github.com/rafibarash">
        <Img fluid={item.picture.fluid} className={classes.img} />
        <div className={classes.caption}>
          <div className={classes.captionContent}>
            <Typography variant="subtitle1" className={classes.title}>
              {item.title}
            </Typography>
            <Typography paragraph className={classes.descr}>
              {item.description}
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  </Grid>
);

const PortfolioGrid = ({ portfolio, classes }) => (
  <div className={classes.root}>
    <Grid container>
      {portfolio.map(({ node: item }) => (
        <PortfolioItem item={item} key={item.title} classes={classes} />
      ))}
    </Grid>
  </div>
);

export default withStyles(styles)(PortfolioGrid);
