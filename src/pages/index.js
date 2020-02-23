import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.frontmatter.path}>
          <h3>{node.frontmatter.title}</h3>
        </Link>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___title }) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
