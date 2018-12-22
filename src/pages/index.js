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
            little diversions. In the future I'd like to hide lots of weird
            little easter eggs around it. Perhaps I already have?
          </p>
          <p>
            I've also included some of my scribbles in the{" "}
            <Link to="/blog/">Blog </Link>
            section.
          </p>
        </div>
        <div className="content-block">
          <h2>how'd ya make it?</h2>
          <p>
            This site is built with Gatsby and Netlify CMS, which makes it
            speedy and easy to update. Have a poke around the code for it{" "}
            <a
              href="https://github.com/nazwhale/mysite"
              target="_blank"
              rel="noopener noreferrer"
            >
              if you like.
            </a>
          </p>
          <p>
            I wanted a good width for reading, so I copied{" "}
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            .
          </p>
        </div>
      </Layout>
    );
  }
}
