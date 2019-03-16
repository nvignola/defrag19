import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ClientCard extends Component {
  render() {
    return (
      <div className="card card-user card-brand">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="card-body">
          <div className="content">
            <div className="author brand">
              <div className="avatar border-gray avatar-brand" style={this.props.client.css}>
                <h4>{this.props.client.name}</h4>
              </div>
            </div>
            <p className="description text-center"><strong>HQ:</strong> {this.props.client.address}</p>
            <hr />
            <div className="">
              <h5 className="text-muted">Representative:</h5>
              <p className="lead mb-0">
                Max Mustermann
              </p>
              <p className="">
                max.mustermann@{this.props.client.name.toLowerCase().split(' ').join('')}.com
              </p>
            </div>
          </div>
          <div className="card-footer text-center">
            <Link to={`${this.props.url}/documents`} className="btn btn-primary btn-sm">Documents</Link>&nbsp;
            <Link to={`${this.props.url}/statement`} className="btn btn-info btn-sm">Statements</Link>&nbsp;
            <Link to={`${this.props.url}/prediction`} className="btn btn-warning btn-sm">Predictions</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientCard;
