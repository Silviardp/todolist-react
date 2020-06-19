import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter text"></input>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
