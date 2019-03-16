import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import DocImage from "assets/img/doc.png";

import Card from "components/Card/Card.jsx";

class Document extends Component {
  render() {
    return (
      <Row className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Document Details"
                category="Document Details with the OCR analysis and Information Extraction"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <div className="content">
                      <p><strong>Document Name:</strong> Jahrabschluss per 31.12.12015</p>
                      <p><strong>Upload Date:</strong> 15.03.2019</p>
                    </div>
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
      </Row>
    );
  }
}

export default Document;
