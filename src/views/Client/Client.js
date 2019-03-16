import React, { Component } from "react";
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
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={12}>
            <p><Link to={'/clients'}>Clients</Link> > <strong>{this.props.client.name} <span className="text-muted">(#{this.props.client.id})</span></strong></p>
            <hr />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <ClientCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                client={this.props.client}
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
      </div>
    );
  }
}

export default Client;
