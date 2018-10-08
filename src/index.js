import React from "react";
import ReactDOM from "react-dom";

import ReactLink from "./ReactLink/ReactLink";

import "./Index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>@khriztianmoreno ⚛︎️</h1>
        <p>
          Edit <code>src/Index.js</code> and save to reload.
        </p>
        <ReactLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </ReactLink>
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
