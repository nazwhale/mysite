import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>👋</h1>
        <p>Hello there, my name is Naz.</p>
        <p>
          I'm a software engineer at{" "}
          <a
            href="https://monzo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Monzo
          </a>
          .
        </p>
        <p>I live in London.</p>
      </Layout>
    );
  }
}
