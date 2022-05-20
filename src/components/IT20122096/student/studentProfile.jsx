import React, { Component } from "react";
import NavbarInside from "../common/navbarInside";
import StudentGroup from "./studentGroup";
import { getUser } from "../../../services/userServices";

class SupervisorProfile extends Component {
  state = {
    items: ["Group", "Documents", "Reports"],
    currentItem: "Group",
    pageSize: 3,
    currentPage: 1,
    user:{}
  };
 async componentDidMount() { 
    const { data: user } = await getUser();
    this.setState({ user });
   }
  handleChange = (item) => {
    this.setState({ currentItem: item });
  };

  render() {
    const { items, currentItem,user } = this.state;
    return (
      <div>
        <center>
          <h1>Student :{user.name }</h1>
        </center>
        <div>
          <NavbarInside
            items={items}
            onChange={this.handleChange}
            currentItem={currentItem}
          />
          {currentItem === "Group" ? (
           <StudentGroup/>
          ) : currentItem === "Request" ? (
            <div>req</div>
          ) : currentItem === "Documents" ? (
            <div>docs</div>
          ) : currentItem === "Reports" ? (
            <div>repo</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SupervisorProfile;
