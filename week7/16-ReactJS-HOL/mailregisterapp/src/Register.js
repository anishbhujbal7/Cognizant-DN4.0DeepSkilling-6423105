import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      errors: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;

      case "email":
        errors.email =
          value.includes("@") && value.includes(".")
            ? ""
            : "Email must contain @ and .";
        break;

      case "password":
        errors.password =
          value.length < 8 ? "Password must be at least 8 characters long!" : "";
        break;

      default:
        break;
    }

    this.setState({ [name]: value, errors });
  };

  validateForm = (errors) => {
    return Object.values(errors).every(error => error === "");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors } = this.state;

    if (this.validateForm(errors)) {
      alert("Valid Form");
      this.setState({
        fullName: "",
        email: "",
        password: "",
        errors: { fullName: "", email: "", password: "" }
      });
    } else {
      if (errors.fullName) alert(errors.fullName);
      if (errors.email) alert(errors.email);
      if (errors.password) alert(errors.password);
    }
  };

  render() {
    const { fullName, email, password, errors } = this.state;

    return (
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
        <h2>📧 Mail Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name:</label><br />
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
            <div style={{ color: "red" }}>{errors.fullName}</div>
          </div>
          <br />
          <div>
            <label>Email:</label><br />
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
            <div style={{ color: "red" }}>{errors.email}</div>
          </div>
          <br />
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
            <div style={{ color: "red" }}>{errors.password}</div>
          </div>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
