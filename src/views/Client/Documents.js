import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";
import gif from "assets/img/super_dino.gif";
import Card from "components/Card/Card.jsx";
import Document from './Document';

const DOCUMENTS_URL = 'http://file-upload.eu-west-1.elasticbeanstalk.com/documents';

class Documents extends Component {
  state = { documents: [] };

  componentDidMount() {
    fetch(DOCUMENTS_URL).then((documents) => this.setState({ documents }));
  }
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
                  <Fragment>
                  {
                    this.state.documents.length
                    ? <Table striped hover>
                      <thead>
                        <tr>
                          {["ID", "Name", "Upload Date", "Actions"].map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.documents.map((prop, key) => {
                          return (
                            <tr key={key}>
                              <td>{prop.id}</td>
                              <td>{prop.name}</td>
                              <td>{prop.uploadDate}</td>
                              <td>
                                <Link className="btn btn-primary btn-sm" to={`${this.props.match.url}/${key}`}>View Details</Link>
                                &nbsp;
                                <span className="btn btn-danger btn-sm">Delete</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    : <div className="text-centered">
                        <img src={gif} alt="..." style={{ width: '100%', display: 'inline-block' }}/>
                    </div>
                  }
                  </Fragment>
                }
              />
            </Col>
          </Row>
        </Grid>
        {(this.state.documents || []).map((doc) => <Route
          key={doc.id}
          path={`${this.props.match.url}/${doc.id}`}
          render={(props) => <Document document={doc} {...props} />} 
          />
        )}
      </div>
    );
  }
}

export default Documents;
