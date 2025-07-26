import React, { Component } from "react";
import "./CountPeople.css"; // Optional CSS

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="block">
          <button className="btn" onClick={() => this.updateEntry()}>
            Login
          </button>
          <span className="text">{this.state.entrycount} People Entered!!!</span>
        </div>
        <div className="block">
          <button className="btn" onClick={() => this.updateExit()}>
            Exit
          </button>
          <span className="text">{this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
