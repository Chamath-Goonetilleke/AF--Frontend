import React, { Component } from "react";
import AdminDocuments from "./adminDocuments";
import AdminGroups from "./adminGroups";
import AdminUsers from "./adminUsers";
import NavbarInside from "./common/navbarInside";

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
        <NavbarInside
          items={items}
          onChange={this.handleNavSelect}
          currentItem={this.state.currentItem}
        />
        <div style={{ marginTop: "4rem" }}>
          {currentItem === "Groups" ? (
            <AdminGroups />
          ) : currentItem === "Documents" ? (
            <AdminDocuments/>
          ) : currentItem === "Users" ? (
            <AdminUsers/>
          ) : currentItem === "Report" ? (
            <div>repors</div>
          ) : null}
        </div>
      </div>
    );
  }
}
