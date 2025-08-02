
import React, { Component } from "react";

class GuestPage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Guest!</h2>
        <p>You can browse available flights below:</p>
        <ul>
          <li>Flight A - Mumbai to Delhi</li>
          <li>Flight B - Chennai to Bangalore</li>
          <li>Flight C - Kolkata to Hyderabad</li>
        </ul>
        <p><strong>Please login to book tickets.</strong></p>
      </div>
    );
  }
}

export default GuestPage;
