import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

import statement from "variables/statement";

const tableHeader = ['Name', '2016', '2017', '2018', '2019'];
const tableValues = [];
Object.keys(statement.data).forEach(k => {
    tableValues.push([
        statement.data[k].name,
        `${statement.data[k].value1.toLocaleString()} €`,
        `${statement.data[k].value2.toLocaleString()} €`,
        `${statement.data[k].value3.toLocaleString()} €`,
        `${statement.data[k].value4.toLocaleString()} €`,
    ]);
});

class Statement extends Component {
    render() {
        return (
            <div className="content statement-view">
                <Grid fluid>
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
                                                {tableHeader.map((prop, key) => {
                                                    return <th key={key} className={key > 0 ? 'text-center' : ''}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableValues.map((prop, key) => {
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
