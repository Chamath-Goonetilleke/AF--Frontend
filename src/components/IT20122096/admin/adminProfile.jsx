import React, { Component } from "react";
import AdminDocuments from "./Document/adminDocuments";
import AdminGroups from "./Group/adminGroups";
import AdminUsers from "./Users/adminUsers";
import NavbarInside from "../common/navbarInside";
import StudentUpdate from "./Users/studentUpdateModal";

export default class AdminProfile extends Component {
  state = {
    currentItem: "Groups",
  };
  handleNavSelect = (item) => {
    this.setState({ currentItem: item });
  };
  render() {
    const items = ["Groups", "Documents", "Users", "Report"];
    const currentItem = this.state.currentItem;
    return (
      <div style={{ marginTop: "5rem" }}>
        <center>
          <h1>Admin Pannel</h1>
        </center>
        <NavbarInside
          items={items}
          onChange={this.handleNavSelect}
          currentItem={this.state.currentItem}
        />
        <div style={{ marginTop: "4rem" }}>
          {currentItem === "Groups" ? (
            <AdminGroups />
          ) : currentItem === "Documents" ? (
            <AdminDocuments />
          ) : currentItem === "Users" ? (
            <AdminUsers />
          ) : currentItem === "Report" ? (
            <StudentUpdate/>
          ) : null}
        </div>
      </div>
    );
  }
}
