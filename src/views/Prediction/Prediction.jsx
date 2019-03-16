import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import ChartistGraph from 'react-chartist';

import Card from "components/Card/Card.jsx";
import predictions from "variables/predictions";

class Predictions extends Component {
    render() {
        return (
            <div className="content prediction-view">
                <Grid fluid>
                    <Row>
                        <Col md={6}>
                            <Card
                                title="Prediction #1"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={predictions.data} options={Object.assign({}, predictions.options, { stackBars: true })} type="Bar" />
                                }
                            />
                        </Col>
                        <Col md={6}>
                            <Card
                                title="Prediction #2"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={predictions.data} options={predictions.options} type="Bar" />
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Prediction #3"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={predictions.data} options={predictions.options} type="Line" className="prediction-lines-animation" />
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Predictions;
