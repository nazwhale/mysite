import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>👋</h1>
        welcome aboard
      </Layout>
    );
  }
}
