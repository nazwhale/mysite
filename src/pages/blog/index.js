import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <h1>✏️</h1>
        <section className="section">
          <div className="container">
            {posts.map(({ node: post }) => (
              <div className="content" key={post.id}>
                <p>
                  <small>{post.frontmatter.date}</small>
                  <span> &bull; </span>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 50)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`;
