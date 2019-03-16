import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { Link } from 'react-router-dom';

class Statement extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            _tableHeaders: [],
            _tableValues: [],
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
        .then(function(statements) {
            const tableHeaders = ['Name', '2016', '2017', '2018', '2019'];
            const tableValues = [];
            Object.keys(statements.data).forEach(k => {
                tableValues.push([
                    statements.data[k].name,
                    `${statements.data[k].value1.toLocaleString()} €`,
                    `${statements.data[k].value2.toLocaleString()} €`,
                    `${statements.data[k].value3.toLocaleString()} €`,
                    `${statements.data[k].value4.toLocaleString()} €`,
                ]);
            });
            return { tableHeaders, tableValues };
        })
        .then(({ tableHeaders, tableValues }) => {
            this.setState({
                _tableHeaders: tableHeaders,
                _tableValues: tableValues,
            })
        });
    }
    render() {
        return (
            <div className="content statement-view">
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
                        <strong>Statement</strong>
                        </p>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Statement"
                                category="Last 3 years plus current"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {this.state._tableHeaders.map((prop, key) => {
                                                    return <th key={key} className={key > 0 ? 'text-center' : ''}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state._tableValues.map((prop, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {prop.map((prop, key) => {
                                                            return <td className={key > 0 ? 'text-center' : ''} key={key}>{prop}</td>;
                                                        })}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Statement;
