import React, { Component } from "react";

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
              <a href="#/clients/1" className="avatar border-gray avatar-brand" style={this.props.client.css}>
                <h4>{this.props.client.name}</h4>
              </a>
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
            <a className="btn btn-primary btn-sm" href="#/documents">Documents</a>&nbsp;
            <a className="btn btn-info btn-sm" href="#/predictions">Predictions</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientCard;
