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
            <p>{this.props.description}</p>
            <div>
              <h6>Ingredients</h6>
              <ul className="list-group">
                {this.props.ingredients.map((ingredient) => {
                return <li className="list-group-flush">{ingredient}</li>;
                })}
              </ul>  

              <h6>Instructions</h6>
              <ol>
                {this.props.instructions.map((instruction) => {
                return <li>{instruction}</li>;
                })}
              </ol>
            </div>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
