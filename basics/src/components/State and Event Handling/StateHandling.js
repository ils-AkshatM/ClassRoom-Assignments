import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({
      counter: 5
    });

    const { counter } = this.state;

    this.setState({
      counter: counter + 1
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Increment counter</button>
        <div>Counter value is {counter}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

export default Counter;
