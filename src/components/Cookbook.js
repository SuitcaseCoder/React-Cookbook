import React, { Component } from "react";
import "../css/Cookbook.css";
import Note from "./Recipes";

class Cookbook extends Component {
  constructor() {
    super();
    this.state = {
      Recipes: [
        {
          title: "Class Recipes",
          body: "Always use constructors when extending another class",
        },
        {
          title: "My New Address",
          body: "2001 N Lonhill Phoenix, AZ 81234",
        },
        {
          title: "React Recipes",
          body: "Everything in React is a component",
        },
      ],
    };
  }

  addNote() {
    console.log(this.state.Recipes);
    this.state.Recipes.push({
      title: "New Note Title",
      body: "New Note body",
    });
    this.setState({
      Recipes: this.state.Recipes,
    });
  }

  render() {
    return (
      <div>
        <div className="div-Cookbook">
          <div className="row">
            <Note title="First Title" body="first body lorem lorem lorem" />

            {this.state.Recipes.map((note) => {
              return <Note title={note.title} body={note.body} />;
            })}
          </div>
        </div>

        <div>
          <button
            onClick={this.addNote.bind(this)}
            className="btn btn-success add-button"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Cookbook;
