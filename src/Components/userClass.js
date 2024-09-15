import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "hema",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
      const response = await fetch("https://api.github.com/users/yannam-hema");
      const data = await response.json();
      this.setState({
        userInfo: data,
      });
      console.log(data);
    
  }

  render() {
    const { login, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h2>Hello, I am {login}</h2>
     <img src={avatar_url} alt="Profile" style={{ width: 100, height: 100, borderRadius: "50%" }} />
        <h3>Contact: yannamhema30@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
