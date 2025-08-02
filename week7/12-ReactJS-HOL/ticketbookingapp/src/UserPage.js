
import React, { Component } from "react";

class UserPage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Back!</h2>
        <p>You are logged in and can now book tickets:</p>
        <ul>
          <li>Flight A - Mumbai to Delhi <button>Book</button></li>
          <li>Flight B - Chennai to Bangalore <button>Book</button></li>
          <li>Flight C - Kolkata to Hyderabad <button>Book</button></li>
        </ul>
      </div>
    );
  }
}

export default UserPage;
