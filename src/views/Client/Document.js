import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import DocImage from "assets/img/doc.png";

import Card from "components/Card/Card.jsx";

class Document extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={`Document Details: #${this.props.document[0]}`}
                category="Document Details with the OCR analysis and Information Extraction"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <div className="content">
                      <p><strong>Document Name:</strong> {this.props.document[1]}</p>
                      <p><strong>Upload Date:</strong> {this.props.document[2]}</p>
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
      </div>
    );
  }
}

export default Document;
