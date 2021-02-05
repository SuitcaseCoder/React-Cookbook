import React, { useState } from "react";

function Functional() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(5);


  // this.state.handleInput = this.handleInput.bind(this);

  const handleClick = (event) => {
    console.log("Handle Click", event.target);
  };

  // const handleInput=(event)=>{
  //   this.setState({user: event.target.value});
  //     console.log("Handle Input", event.target.value);
  // };

  return (
    <div>
      <div className="row">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count * 3)}>Click me</button>

      <div onClick={handleClick}>Clickable Div</div>
      </div>
    </div>
  );
}

export default Functional;
