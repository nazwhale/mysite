import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>👋</h1>
        <div className="content-block">
          <h2>who are you?</h2>
          <p>Hello, my name is Naz.</p>
          <p>
            I'm a software engineer at{" "}
            <a
              href="https://monzo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monzo
            </a>
            , though I used to pretend to be a writer.
          </p>
          <p>I live in London.</p>
        </div>
        <div className="content-block">
          <h2>what is this place?</h2>
          <p>
            At the moment this site is mainly for my personal programming
            explorations.
          </p>
          <p>
            Exploring different designs, new ways of creating things, silly
            little diversions.
          </p>
          <p>
            I've also included some of my scribbles in the{" "}
            <Link to="/blog/">Blog </Link>
            section.
          </p>
        </div>
      </Layout>
    );
  }
}
