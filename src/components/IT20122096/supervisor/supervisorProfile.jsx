import React, { Component } from "react";
import NavbarInside from "../common/navbarInside";
import SupervisorGroups from "./supervisorGroups";

class SupervisorProfile extends Component {
  state = {
    items: ["Groups", "Request", "Documents", "Reports"],
    currentNavItem: "Groups",
    currentItem: "Groups",
    pageSize: 3,
    currentPage: 1,
  };

  handleChange = (item) => {
    this.setState({ currentItem: item });
  };

  render() {
    const { items, currentItem } = this.state;
    return (
      <div>
        <center>
          <h1>Supervisor</h1>
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
