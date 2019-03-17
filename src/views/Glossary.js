import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Glossary1 from "assets/img/1.png";
import Glossary2 from "assets/img/2.png";
import Glossary3 from "assets/img/3.png";
import Glossary4 from "assets/img/4.png";

class Document extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <img style={{maxWidth: '100%'}} src={Glossary1} alt=" " />
              <img style={{maxWidth: '100%'}} src={Glossary2} alt=" " />
              <img style={{maxWidth: '100%'}} src={Glossary3} alt=" " />
              <img style={{maxWidth: '100%'}} src={Glossary4} alt=" " />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Document;
