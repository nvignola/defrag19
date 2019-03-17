import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table, Button, Modal } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import fetch from 'util/fetch';
import DocImage from "assets/img/doc.png";
import ProcessedDocImage from "assets/img/doc.processed.png";

const DOCUMENTS_URL = 'http://file-upload.eu-west-1.elasticbeanstalk.com/documents';

class Documents extends Component {
  state = {
    documents: [],
    _isLoading: false,
    show: false,
  };

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({ _isLoading: true });
    fetch(DOCUMENTS_URL)
      .then(documents => {
        this.setState({
          documents: documents,
          _isLoading: false,
        });
      });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(index) {
    this.setState({ show: index });
  }
  handleClick() {
    this.setState({ _isLoading: true });
    fetch(DOCUMENTS_URL)
    .then(documents => {
      this.setState({
        documents: documents,
        _isLoading: false,
      });
    });
  }
  render() {
    const { _isLoading } = this.state;
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
                      disabled={_isLoading }
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
                                <Button bsStyle="primary" size="sm" onClick={this.handleShow.bind(this, key)} className="btn-fill">View Details</Button>
                                {/* <Link className="btn btn-primary btn-sm" to={`${this.props.match.url}/${doc.id}`}>View Details</Link> */}
                                &nbsp;
                                {/* <Button variant="primary" size="sm">Delete</Button> */}
                                <Modal dialogClassName='modal-custom-width' show={this.state.show === key} onHide={this.handleClose}>
                                  <Modal.Header closeButton>
                                    <div>
                                      <strong>{doc.name}</strong>
                                      &nbsp;
                                      <span className="text-muted">#{doc.id}</span>
                                      <span><i className="pe-7s-clock" /> {new Date(doc.upload_date).toLocaleString('de-DE')}</span>
                                    </div>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Row className="content">
                                      <Col md={4}>
                                        <img style={{maxWidth: '100%'}} src={DocImage} alt="Document Received" />
                                        <center>Document Received</center>
                                      </Col>
                                      <Col md={4}>
                                        <img style={{maxWidth: '100%'}} src={DocImage} alt="Document Highlighted" />
                                        <center>Document Highlighted</center>
                                      </Col>
                                      <Col md={4}>
                                        <img style={{maxWidth: '100%'}} src={ProcessedDocImage} alt="Document Processed" />
                                        <center>Document Processed</center>
                                      </Col>
                                    </Row>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                  </Modal.Footer>
                                </Modal>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    : <div className="text-center">
                          <strong>Loading...</strong>
                    </div>
                  }
                  </Fragment>
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
