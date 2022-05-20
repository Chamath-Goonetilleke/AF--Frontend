import React, { Component } from "react";
import { getGroups } from "../../../services/IT20122096/adminService";
import { paginate } from "../../../services/IT20122096/paginateService";
import Group from "../common/group";
import Page from "../common/pagination";
import SideMenuList from "../common/sideMenuList";

class PannelMemberGroups extends Component {
  state = {
    groups: [],
    menu: [
      "All Groups",
      "Submit Documents",
      "Done Marking",
      "Finish the Research",
    ],
    currentItem: "All Groups",
    pageSize: 3,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: groups } = await getGroups();
    this.setState({ groups });
  }
  handleChange = (item) => {
    this.setState({ currentItem: item });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  getPageData = () => {
     const { groups, currentPage, currentItem, pageSize } = this.state;
     let filterdGroup = [];

     if (currentItem === "All Groups") {
       filterdGroup = groups.filter(
         (group) => group.panelmember === localStorage.getItem("userId")
       );
     }
     if (currentItem === "Submit Documents") {
       filterdGroup = groups.filter(
         (group) =>
           group.panelmember === localStorage.getItem("userId") &&
           group.presentation &&
           group.presentation !== ""
       );
    }
    if (currentItem === "Done Marking") {
      filterdGroup = groups.filter(
        (group) =>
          group.panelmember === localStorage.getItem("userId") &&
          group.isMarked
      );
    }
     if (currentItem === "Finish the Research") {
       filterdGroup = groups.filter(
         (group) =>
           group.panelmember === localStorage.getItem("userId") &&
           group.isOngoing === false
       );
     }

    const pagedGroups = paginate(filterdGroup, currentPage, pageSize);
    return { data: pagedGroups, count:filterdGroup.length };
  };
  render() {
    const { menu, currentItem, groups, pageSize, currentPage } = this.state;
    return (
      <div>
        <div style={{ display: "flex", marginTop: "5rem" }}>
          <SideMenuList
            items={menu}
            currentItem={currentItem}
            onChange={this.handleChange}
            width="21rem"
          />
          <Group items={this.getPageData().data} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <Page
            itemCount={this.getPageData().count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default PannelMemberGroups;
