import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Document from './Document';
import fetch from 'util/fetch';
import DOCUMENTS from 'variables/documents';

const DOCUMENTS_URL = 'http://file-upload.eu-west-1.elasticbeanstalk.com/documents';

class Documents extends Component {
  state = { documents: DOCUMENTS, _hasBeenUpdated: false, _isLoading: false, };

  componentDidMount() {
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state._hasBeenUpdated) {
      return;
    }

    this.setState({ _isLoading: true });
    fetch(DOCUMENTS_URL)
    .then(documents => {
      this.setState({
        documents: documents,
        _isLoading: false,
        _hasBeenUpdated: true,
      });
    });
  }
  render() {
    const { _isLoading, _hasBeenUpdated } = this.state;
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
                title={
                  <div>
                    Documents
                    <Button
                      className="pull-right update-btn"
                      bsStyle="primary"
                      disabled={_isLoading || _hasBeenUpdated}
                      onClick={!_isLoading ? this.handleClick : null}>
                      <i className="pe-7s-refresh-cloud"></i>&nbsp;
                        {_isLoading ? 'Loading…' : 'Update'}
                    </Button>
                  </div>
                  }
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
                        {this.state.documents.map((doc, key) => {
                          return (
                            <tr key={key}>
                              <td>{doc.id}</td>
                              <td>{doc.name}</td>
                              <td>{new Date(doc.upload_date).toLocaleString('de-DE')}</td>
                              <td>
                                <Link className="btn btn-primary btn-sm" to={`${this.props.match.url}/${doc.id}`}>View Details</Link>
                                &nbsp;
                                <span className="btn btn-danger btn-sm">Delete</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    : <div className="text-centered">
                        Loading...
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
