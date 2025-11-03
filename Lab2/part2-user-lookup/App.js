import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      user: null,
      loading: false,
      error: null,
      notFound: false,
    };
  }

  fetchUserData = (id) => {
    this.setState({
      loading: true,
      user: null,
      error: null,
      notFound: false,
    });

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("User not found");
        return response.json();
      })
      .then((data) => {
        if (Object.keys(data).length === 0) {
          this.setState({ notFound: true, loading: false });
        } else {
          this.setState({ user: data, loading: false });
        }
      })
      .catch((error) => this.setState({ error, loading: false }));
  };

  handleChange = (e) => this.setState({ userId: e.target.value });
  handleSearch = () => {
    if (this.state.userId) this.fetchUserData(this.state.userId);
  };

  render() {
    const { userId, user, loading, error, notFound } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h1>User Profile Lookup</h1>

        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={this.handleChange}
          placeholder="Enter user ID (1-10)"
          style={{ marginRight: "10px" , width: "200px"}}
        />

        <button onClick={this.handleSearch}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        {notFound && <p>User not found</p>}

        {user && (
          <div style={{ marginTop: "20px" }}>
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
