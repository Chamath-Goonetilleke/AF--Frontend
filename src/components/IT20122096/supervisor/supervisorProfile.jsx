import React, { Component } from "react";
import NavbarInside from "../common/navbarInside";
import SupervisorGroups from "./supervisorGroups";
import { getUser } from "../../../services/IT20122096/userServices";
import CommonDocuments from './../common/Documents/commonDocuments';
class SupervisorProfile extends Component {
  state = {
    items: ["Groups", "Request", "Documents", "Reports"],
    currentItem: "Groups",
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
          <h1>Supervisor : {user.name }</h1>
        </center>
        <div>
          <NavbarInside
            items={items}
            onChange={this.handleChange}
            currentItem={currentItem}
          />
          {currentItem === "Groups" ? (
            <SupervisorGroups />
          ) : currentItem === "Request" ? (
            <div>req</div>
          ) : currentItem === "Documents" ? (
            <CommonDocuments/>
          ) : currentItem === "Reports" ? (
            <div>repo</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SupervisorProfile;
