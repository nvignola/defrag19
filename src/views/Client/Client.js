import React, { Component, Fragment } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import ChartistGraph from "react-chartist";
import {
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

import { Route, Link } from "react-router-dom";
import ClientCard from './ClientCard';
import Documents from './Documents';
import Prediction from 'views/Prediction/Prediction';
import Statement from "views/Statement/Statement";

class Client extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
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
              <Col md={4}>
                <ClientCard
                  client={this.props.client}
                  url={this.props.match.url}
                  bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                />
              </Col>
              <Col md={8}>
                <Card
                    id="chartActivity"
                    title="2014 Sales"
                    category="All products including Taxes"
                    stats="Data information certified"
                    statsIcon="fa fa-check"
                    content={
                      <div>
                        <ChartistGraph
                          data={dataBar}
                          type="Bar"
                          options={optionsBar}
                          responsiveOptions={responsiveBar}
                        />
                      </div>
                    }
                    legend={
                      <div className="legend">{this.createLegend(legendBar)}</div>
                    }
                  />
              </Col>
            </Row>
          </Grid>
        : <Fragment>
          {this.props.location.pathname === `${this.props.match.url}/documents` ? <Route 
            to={`${this.props.match.url}/documents`} exact={false}
            render={() => <Documents client={this.props.client} />} 
          /> : null}
          {this.props.location.pathname === `${this.props.match.url}/prediction` ? <Route
            to={`${this.props.match.url}/prediction`} exact={false}
            render={() => <Prediction client={this.props.client} />}
          /> : null}
          {this.props.location.pathname === `${this.props.match.url}/statement` ? <Route
            to={`${this.props.match.url}/statement`} exact={false}
            render={() => <Statement client={this.props.client} />}
          /> : null}
        </Fragment>
        }
      </Fragment>
    );
  }
}

export default Client;
