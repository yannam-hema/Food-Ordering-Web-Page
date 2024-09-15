import UserClass from "./userClass";
import React from "react";
import UserContext from "../utils/userContext";  

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent component did mount called");
  }

  render() {
    //console.log("parent render");
    return (
      <div>
        <div>
          loggedInUser
          <UserContext.Consumer> 
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Hema"} location={"Giddalur"} />
      </div>
    );
  }
}

export default About;
