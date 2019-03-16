import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
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
  state = { view: 'table' }
  toggleView() {
    this.setState({
      view: this.state.view === 'grid' ? 'table' : 'grid',
    })
  }
  render() {
    const PROPS = this.props;
    return (
      <div className="content">
      {
      PROPS.location.pathname === PROPS.match.path
        ? <Grid fluid>
          <Row>
            <Col md={12}>
              <button className="btn btn-default btn-sm pull-right" onClick={this.toggleView.bind(this)}>Change View</button>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {this.state.view === 'grid' 
              ? <Card
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
              : null }

              {this.state.view === 'table' 
              ? <Table striped hover>
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <div className="link-to-brand" style={client.css}>
                            <Link to={`/clients/${client.id}`}>{client.name}</Link>
                          </div>
                        </td>
                        <td>
                          <Link to={`${this.props.match.url}/${client.id}/documents`} className="btn btn-primary">Documents</Link>&nbsp;
                          <Link to={`${this.props.match.url}/${client.id}/statement`} className="btn btn-primary">Statements</Link>&nbsp;
                          <Link to={`${this.props.match.url}/${client.id}/prediction`} className="btn btn-warning">Predictions</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              : null}
            </Col>
          </Row>
        </Grid>
        : <Fragment>
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
        </Fragment>
      }
      </div>
    );
  }
}

export default Clients;
