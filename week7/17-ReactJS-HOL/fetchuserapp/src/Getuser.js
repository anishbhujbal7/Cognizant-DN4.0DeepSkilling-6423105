
import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const user = data.results[0];

      this.setState({
        user: {
          title: user.name.title,
          firstName: user.name.first,
          picture: user.picture.large
        },
        isLoading: false
      });
    } catch (error) {
      this.setState({ error: "Failed to fetch user", isLoading: false });
    }
  }

  render() {
    const { user, isLoading, error } = this.state;

    if (isLoading) {
      return <h3>Loading...</h3>;
    }

    if (error) {
      return <h3>{error}</h3>;
    }

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>User Info</h2>
        <img src={user.picture} alt="User" style={{ borderRadius: "50%" }} />
        <p>
          <strong>{user.title} {user.firstName}</strong>
        </p>
      </div>
    );
  }
}

export default Getuser;
