import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles, useTheme } from '@material-ui/styles';

// My Components
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import PortfolioGrid from './PortfolioGrid';

const styles = {};

const Portfolio = () => {
  const theme = useTheme();
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPortfolio(sort: { fields: [dateCreated], order: DESC }) {
          edges {
            node {
              title
              link
              description
              picture {
                fluid {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  );
  const { edges: portfolio } = data.allContentfulPortfolio;
  return (
    <Section
      bgColor={theme.palette.background.default}
      maxWidth="lg"
      name="Portfolio"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioGrid portfolio={portfolio} />
    </Section>
  );
};

export default withStyles(styles)(Portfolio);
