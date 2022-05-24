import React, { Component } from "react";
import AdminDocuments from "./Document/adminDocuments";
import AdminGroups from "./Group/adminGroups";
import AdminUsers from "./Users/adminUsers";
import NavbarInside from "../common/navbarInside";
import StudentUpdate from "./Users/studentUpdateModal";
import AdminReport from "./Report/Report";

export default class AdminProfile extends Component {
  state = {
    currentItem: localStorage.getItem("adCI") || "Groups",
  };
  handleNavSelect = (item) => {
    localStorage.setItem("adCI", item);
    this.setState({currentItem:item})
  };
  render() {
    const items = ["Groups", "Documents", "Users", "Report"];
    const currentItem = localStorage.getItem("adCI") || this.state.currentItem;
    return (
      <div style={{ marginTop: "2rem" }}>
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
            <AdminReport/>
          ) : null}
        </div>
      </div>
    );
  }
}
