import React, { Component } from "react";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import fetch from 'util/fetch';
import Card from "components/Card/Card.jsx";
import { Link } from 'react-router-dom';

class Statement extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            _hasBeenUpdated: false,
            _isLoading: false,
            _tableHeaders: ['Name', '2016', '2017', '2018', '2019'],
            _tableValues: [
                [
                    'Total Assets',
                    `${'19048'.toLocaleString()} €`,
                    `${'4032'.toLocaleString()} €`,
                    `-`,
                    `-`
                ],
                [
                    'Other reserves',
                    `${'23483'.toLocaleString()} €`,
                    `${'14953'.toLocaleString()} €`,
                    `-`,
                    `-`
                ],
            ],
            _apiUrl: 'http://file-upload.eu-west-1.elasticbeanstalk.com/statements',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {}

    handleClick() {
        if (this.state._hasBeenUpdated) {
            return;
        }

        this.setState({ _isLoading: true });
        fetch(this.state._apiUrl)
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
                _isLoading: false,
                _hasBeenUpdated: true,
            })
        });
    }
    render() {
        const { _isLoading, _hasBeenUpdated } = this.state;

        return (
            <div className="content statement-view">
                <Grid fluid>
                    <Row>
                      <Col md={12}>
                        <p>
                        <Button
                          className="pull-right update-btn"
                          bsStyle="primary"
                          disabled={_isLoading || _hasBeenUpdated}
                          onClick={!_isLoading ? this.handleClick : null}>
                          <i className="pe-7s-refresh-cloud"></i>&nbsp;
                            {_isLoading ? 'Loading…' : 'Update'}
                        </Button>
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
                                                    return <th key={key} className={key > 0 ? `text-center y${prop}` : ''}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state._tableValues.map((prop, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {prop.map((prop, key) => {
                                                            return <td className={key > 0 ? `text-center y${this.state._tableHeaders[key]}` : ''} key={key}>{prop}</td>;
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
