import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import DocImage from "assets/img/doc.png";

import Card from "components/Card/Card.jsx";

class Document extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={
                  <div>
                    <span className="pull-right"><i className="pe-7s-clock" /> {new Date(this.props.document.upload_date).toLocaleString('de-DE')}</span>
                    <strong>{this.props.document.name}</strong>
                    &nbsp;
                    <span className="text-muted">#{this.props.document.id}</span>
                  </div>
                }
                category="Document Details with the OCR analysis and Information Extraction"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
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
                        <img style={{maxWidth: '100%'}} src={DocImage} alt="Document Processed" />
                        <center>Document Processed</center>
                      </Col>
                    </Row>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Document;
