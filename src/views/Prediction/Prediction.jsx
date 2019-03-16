import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import ChartistGraph from 'react-chartist';
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import predictions from "variables/predictions";

const ChartLegend = predictions.legend.map((prop, key) => {
    return <h5 key={key}>
        <span className="legend-color" style={{ backgroundColor: `${prop.color}` }}></span>
        <span className="legend-label">{prop.label}</span>
    </h5>
});

class Predictions extends Component {
    render() {
        return (
            <div className="content prediction-view">
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
                        <strong>Prediction</strong>
                        </p>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card
                                title="Prediction #1"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={predictions.data} options={Object.assign({}, predictions.options, { stackBars: true })} type="Bar" />
                                }
                                legend={
                                    <div className="legend-container">
                                        { ChartLegend }
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={12}>
                            <Card
                                title="Prediction #2"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={predictions.data} options={predictions.options} type="Bar" />
                                }
                                legend={
                                    <div className="legend-container">
                                        { ChartLegend }
                                    </div>
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
                                legend={
                                    <div className="legend-container">
                                        { ChartLegend }
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

export default Predictions;
