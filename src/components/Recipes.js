import React, { Component } from "react";
import "../css/Recipes.css";

class Note extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <p>{this.props.random}</p>
            <p>this is static info that will never change</p>
            <p>
              {this.props.age} and fave color is: {this.props.color}
            </p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
