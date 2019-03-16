import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import {name, url} from 'variables/config'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#company">Company</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href={url}>{name}</a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
