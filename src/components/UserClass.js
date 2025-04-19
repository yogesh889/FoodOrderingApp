import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'default',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/yogesh889"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmound");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt={name} />
        {/* // * accessing the state variable */}
        {/* <h1>Count: {this.state.count}</h1> */}
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            // * NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count = this.state.count + 1;

            // * USE setState() method instead

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h2>Name: {this.props.name}</h2> */}
        <h2>Name: {name}</h2>
        {/* <h3>Location: {this.props.location}</h3> */}
        <h3>Location: {location}</h3>
        <h4>Contact: @vaasuk24</h4>
      </div>
    );
  }
}

export default UserClass;
