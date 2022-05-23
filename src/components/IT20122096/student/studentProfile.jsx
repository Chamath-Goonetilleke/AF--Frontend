import React, { Component } from "react";
import NavbarInside from "../common/navbarInside";
import StudentGroup from "./studentGroup";
import { getUser } from "../../../services/IT20122096/userServices";
import CommonDocuments from './../common/Documents/commonDocuments';

class SupervisorProfile extends Component {
  state = {
    items: ["Group", "Documents"],
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
          ) : currentItem === "Documents" ? (
            <CommonDocuments/>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SupervisorProfile;
