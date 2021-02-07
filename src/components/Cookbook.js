import React, { Component } from "react";
import "../css/Cookbook.css";
import Recipe from "./Recipes";

class Cookbook extends Component {
  constructor() {
    super();
    this.state = {
      Recipes: [
        {
          title: "Class Peanut Butter and Jelly Sandwich",
          description: "You can never go wrong with a pb&j",
          ingredients: ["2 slices of bread", "2 tablespoons peanut butter", "2 teaspoons jelly or jam"],
          instructions: ["spread peanut butter on one side of bread", "spread the jelly on the second slice of bread", "put two slices together (pb & j together)"]
        },
        {
          title: "Simple & Yummy Smoothie",
          description: "A perfect breakfast smoothie",
          ingredients: ["1 frozen banana", "1 room temperature banana", "1 cup frozen strawberries", "1 cup greek yogurt", "1/3 cup oatmeal"],
          instructions: ["add all ingredients to blender", "turn loud blender on for 3 minutes or until mixture is liquidy", "enjoy!"]
        },
        {
          title: "React Recipes",
          description: "Everything in React is a component",
          ingredients: ["2 slices of bread", "2 tablespoons peanut butter", "2 teaspoons jelly or jam"],
          instructions: ["spread peanut butter on one side of bread", "spread the jelly on the second slice of bread", "put two slices together (pb & j together)"]
        },
      ],
    };
  }

  addNote() {
    console.log(this.state.Recipes);
    this.state.Recipes.push({
      title: "New Recipe Title",
      description: "New Note description",
      ingredients: ["veggies", "fruits", "other stuff"],
      instructions: ["do the thing", "mix it up", "taste it" , "add salt", "enjoy"] 
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

            {this.state.Recipes.map((recipe) => {
              return <Recipe 
                  title={recipe.title} 
                  description={recipe.description} 
                  ingredients={recipe.ingredients} 
                  instructions={recipe.instructions} />;
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
