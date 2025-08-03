
import React, { Component } from "react";

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: "",
      complaint: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = "REF" + Math.floor(100000 + Math.random() * 900000);
    alert(
      `Complaint submitted!\n\nEmployee: ${this.state.employeeName}\nComplaint: ${this.state.complaint}\nReference Number: ${refNumber}`
    );
    this.setState({ employeeName: "", complaint: "" });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px" }}>
        <h2>🛠️ Raise a Complaint</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Employee Name: </label><br />
            <input
              type="text"
              name="employeeName"
              value={this.state.employeeName}
              onChange={this.handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Complaint: </label><br />
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="4"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button type="submit">Submit Complaint</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
