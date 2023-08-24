/* eslint-disable react/function-component-definition */
import React from "react";
import generateJoke from "./generateJoke";
import reactLogo from "./icons/pngwing.com (3).png";

const App = () => (
    <div className="container">
      <img src={reactLogo} alt="gggjhg" />
      <h3>Don&apost Laught Challenge</h3>
      <div id="joke" className="joke" />
      <button id="jokeBtn" type="submit" className="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  );
export default App;
