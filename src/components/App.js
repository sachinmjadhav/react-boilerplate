import React from "react";

class App extends React.Component {
  state = {
    name: "Sachin"
  };

  render() {
    return (
      <div>
        <h2>React Starter App by {this.state.name}</h2>
      </div>
    );
  }
}

export default App;
