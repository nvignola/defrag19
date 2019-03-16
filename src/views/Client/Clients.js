import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import Client from "views/Client/Client";

import Card from "components/Card/Card";
import clients from "variables/clients";


const routes = clients.map(c => ({
  path: `/clients/${c.id}`,
  name: `Client: ${c.name}`,
  icon: "pe-7s-graph",
  component: Client,
  data: c
}))


class Clients extends Component {
  render() {
    console.log(this)
    const PROPS = this.props;
    return (
      <div className="content">
      {
      PROPS.location.pathname === PROPS.match.path
        ? <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Clients"
                ctAllIcons
                category={
                  <span>Clients</span>
                }
                content={
                  <Row>
                    {clients.map((client, key) => {
                      return (
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          xs={6}
                          className="font-icon-list"
                          key={key}
                        >
                          <div className="link-to-brand" style={client.css}>
                            <Link to={`/clients/${client.id}`}>{client.name}</Link>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
        : <div>
        {routes.map((prop, key) => <Route
            path={prop.path}
            key={key}
            render={routeProps => (
              <prop.component
                {...routeProps}
                client={prop.data}
              />
            )}
          />
        )}
        </div>
      }
      </div>
    );
  }
}

export default Clients;
