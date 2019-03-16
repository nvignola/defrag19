import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import ChartistGraph from 'react-chartist';
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import transformDataForGraph from "variables/predictions";

const ChartLegend = (legend) => legend.map((prop, key) => {
    return <h5 key={key}>
        <span className="legend-color" style={{ backgroundColor: `${prop.color}` }}></span>
        <span className="legend-label">{prop.label}</span>
    </h5>
});

class Predictions extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            _predictions: {
                data: {},
                options: {},
                legend: [],
            },
            _apiUrl: 'https://i2m3v9oljk.execute-api.eu-west-1.amazonaws.com/production/statements',
        };
    }

    componentDidMount() {
        fetch(this.state._apiUrl, {
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(function (response) {
            return response.json();
        })
        .then(({ data }) => this.setState({
            _predictions: transformDataForGraph(data),
        }));
    }
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
                        <Col md={12}>
                            <Card
                                title="Prediction #1"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={this.state._predictions.data} options={Object.assign({}, this.state._predictions.options, { stackBars: true })} type="Bar" />
                                }
                                legend={
                                    <div className="legend-container">
                                        { ChartLegend(this.state._predictions.legend) }
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={12}>
                            <Card
                                title="Prediction #2"
                                category="Prediction"
                                content={
                                    <ChartistGraph data={this.state._predictions.data} options={this.state._predictions.options} type="Bar" />
                                }
                                legend={
                                    <div className="legend-container">
                                        { ChartLegend(this.state._predictions.legend) }
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
                                    <ChartistGraph data={this.state._predictions.data} options={this.state._predictions.options} type="Line" className="prediction-lines-animation" />
                                }
                                legend={
                                    <div className="legend-container">
                                        { ChartLegend(this.state._predictions.legend) }
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
