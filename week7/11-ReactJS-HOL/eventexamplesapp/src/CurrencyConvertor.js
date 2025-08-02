import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inr: "",
      euro: "",
      rate: 0.011, // 1 INR ≈ 0.011 EUR (for example)
    };
  }

  handleChange = (e) => {
    this.setState({ inr: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Synthetic event
    const { inr, rate } = this.state;
    const euro = (parseFloat(inr) * rate).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.inr}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && (
          <p>
            EUR: <strong>{this.state.euro}</strong>
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
