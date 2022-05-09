import React, { Component } from "react";
import AdminDocuments from "../admin/adminDocuments";
import AdminGroups from "../admin/adminGroups";
import AdminUsers from "../admin/adminUsers";
import NavbarInside from "../common/navbarInside";

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
            <div>repors</div>
          ) : null}
        </div>
      </div>
    );
  }
}
