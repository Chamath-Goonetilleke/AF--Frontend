import React, { Component } from "react";
import { getUsers } from "../../services/userServices";
import SideMenuList from "./common/listGroupMenu";
import Page from "./common/pagination";
import StudentTable from "./studentTable";
import { getGroups } from "../../services/adminService";
import StaffTable from "./common/staffTable";

class AdminUsers extends Component {
  state = {
    groups: [],
    users: [],
    staff: [],
    userRoles: [],
    currentItem: "Student",
    currentPage: 1,
    pageSize: 3,
    itemCount: 0,
  };

  async componentDidMount() {
    {
      const userRoles = [];
      const { data: users } = await getUsers();
      const { data: groups } = await getGroups();
      const itemCount = groups.length;
      users.map((user) => {
        if (user.userRole !== "Admin") {
          userRoles.push(user.userRole);
        }
      });
      this.setState({ userRoles, users, groups, itemCount });
    }
  }

  handleChange = (item) => {
    const users = this.state.users;
    this.setState({ currentPage: 1 });

    if (item === "Student") {
      this.setState({ itemCount: this.state.groups.length });
    }
    if (item === "Supervisor") {
      const staff = users.filter((user) => user.userRole === "Supervisor");
      this.setState({ itemCount: staff.length, staff });
    }
    if (item === "Co-Supervisor") {
      const staff = users.filter((user) => user.userRole === "Co-Supervisor");
      this.setState({ itemCount: staff.length, staff });
    }
    if (item === "Pannel Member") {
      const staff = users.filter((user) => user.userRole === "Pannel Member");
      this.setState({ itemCount: staff.length, staff });
    }
    this.setState({ currentItem: item });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <SideMenuList
          items={this.state.userRoles}
          currentItem={this.state.currentItem}
          onChange={this.handleChange}
        />
        <div className="container">
          <h1>create a search bar</h1>
          {this.state.currentItem === "Student" ? (
            <StudentTable currentPage={this.state.currentPage} />
          ) : (
            <StaffTable
              items={this.state.staff}
              currentItem={this.state.currentItem}
            />
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem",
              marginRight: "5rem",
            }}
          >
            <Page
              itemCount={this.state.itemCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminUsers;
