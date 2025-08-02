import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.incrementAndGreet = this.incrementAndGreet.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  incrementAndGreet() {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handlePress(e) {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementAndGreet}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to Event Handling!")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handlePress}>OnPress (Synthetic Event)</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
