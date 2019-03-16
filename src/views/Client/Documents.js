import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { documentsTHArray, documentsTDArray } from "variables/Variables.jsx";
class Documents extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <p>
              <Link to={'/clients'}>Clients</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <Link to={`/clients/${this.props.client.id}`}>
                {this.props.client.name}
                <span className="text-muted">(#{this.props.client.id})</span>
              </Link>
              <span className="breadcrumb-separator">&gt;</span>
              <strong>Documents</strong>
            </p>
            <hr />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Documents"
                category="All the Documents uploaded for this Client"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {documentsTHArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {documentsTDArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td key={'view'}>
                              <a className="btn btn-primary btn-sm" href={'#/documentDetails'}>View Details</a>
                              &nbsp;
                              <span className="btn btn-danger btn-sm">Delete</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Documents;
