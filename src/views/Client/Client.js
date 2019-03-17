import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import ClientCard from './ClientCard';
import Documents from './Documents';
import Prediction from 'views/Prediction/Prediction';
import Statement from "views/Statement/Statement";

class Client extends Component {
  render() {
    const PROPS = this.props;
    return (
      <Fragment>
        {
        PROPS.location.pathname === PROPS.match.path
        ? <Grid fluid>
            <Row>
              <Col md={12}>
              <p>
                <Link to={'/clients'}>Clients</Link>
                <span className="breadcrumb-separator">&gt;</span>
                <strong to={`/clients/${this.props.client.id}`}>
                  {this.props.client.name}
                  <span className="text-muted">(#{this.props.client.id})</span>
                </strong>
              </p>
              <hr />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ClientCard
                  client={this.props.client}
                  url={this.props.match.url}
                  bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                />
              </Col>
            </Row>
          </Grid>
        : <Fragment>
          <Route
            path={`${this.props.match.url}/documents`} exact={false}
            render={(props) => <Documents client={this.props.client}  {...props} />}
          />
          <Route
            path={`${this.props.match.url}/prediction`} exact={false}
            render={(props) => <Prediction client={this.props.client}  {...props} />}
          />
          <Route
            path={`${this.props.match.url}/statement`} exact={false}
            render={(props) => <Statement client={this.props.client}  {...props} />}
          />
        </Fragment>
        }
      </Fragment>
    );
  }
}

export default Client;
