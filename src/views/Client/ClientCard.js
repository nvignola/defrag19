import React, { Component } from "react";

export class ClientCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <a href="#/clients/1">
              <img
                className="avatar border-gray"
                src={this.props.client.logo}
                alt="..."
              />
              <h4 className="title">{this.props.client.name}</h4>
            </a>
          </div>
          <p className="description text-center">{this.props.client.address}</p>
        </div>
        <hr />
        <div className="text-center">
          <a href="#/documents">Documents</a>
        </div>
      </div>
    );
  }
}

export default ClientCard;
