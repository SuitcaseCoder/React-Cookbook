import React, { useState } from "react";
import "../css/Banner.css";


function Banner() {
    // declaring a new state property ("user") with react hooks, updating the value of state whenever setUser is 'called on/executed', set it to useState and pass in the first value ('') empty string to start with
  const [user, setUser] = useState("");

//   trying to toggle show/hide input name vs heading
const [hasName, setShowHeading] = useState(false);


  return (
      <div className="div-Header">
        <div className="layer">
            { hasName ?  
                <div className="row">
                    <h2>Welcome to {user}'s Cookbook!</h2>
                </div> :
                <div className="row">
                    <form className="row justify-content-center" onSubmit={(e) => setShowHeading(true)}>
                    <input
                    className="col-sm-3"
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => setUser(e.target.value)}
                    />
                    <button type="submit" className="btn col-sm-1">save</button>
                    </form>
                </div> }

        </div>
    </div>
  );
}

export default Banner;
