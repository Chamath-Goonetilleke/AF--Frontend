import React, { Component } from "react";
import Group from "../common/group";
import Page from "../common/pagination";
import { paginate } from "../../../services/paginateService";
import { getGroups } from "../../../services/adminService";
import SideMenuList from "../common/sideMenuList";
import SearchBar from "../common/searchBar";
import _ from "lodash";

class AdminGroups extends Component {
  state = {
    pageSize: 3,
    currentPage: 1,
    menu: [
      "All Groups",
      "Groups with Pannel Member",
      "Groups without Pannel Member",
    ],
    currentItem: "All Groups",
    searchResult: "",
    groups: [],
  };
  async componentDidMount() {
    const { data: groups } = await getGroups();
    this.setState({ groups: groups });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleChange = (item) => {
    this.setState({ currentItem: item });
  };

  handleSearch = (query) => {
    if (query === "") {
      this.setState({
        currentPage: 1,
        currentItem: "All Groups",
        searchResult: query,
      });
    } else {
      this.setState({
        currentPage: 1,
        currentItem: "",
        searchResult: query,
      });
    }
  };
  getPageData = () => {
    const { currentPage, pageSize, groups, currentItem, searchResult } =
      this.state;
    let filterdGroups = [];

    if (searchResult) {
      filterdGroups = groups.filter(
        (g) =>
          g.supercisorid !== "" &&
          (g.groupe + "").toLowerCase().startsWith(searchResult.toLowerCase())
      );
    }
    if (currentItem === "All Groups") {
      filterdGroups = groups.filter((g) => g.supercisorid !== "");
    }
    if (currentItem === "Groups with Pannel Member") {
      filterdGroups = groups.filter(
        (g) => g.supercisorid !== "" && g.panelmember !== ""
      );
    }
    if (currentItem === "Groups without Pannel Member") {
      filterdGroups = groups.filter(
        (g) => g.supercisorid !== "" && g.panelmember === ""
      );
    }

    const data = paginate(filterdGroups, currentPage, pageSize);
    return { data: data, count: filterdGroups.length };
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <SideMenuList
          items={this.state.menu}
          currentItem={this.state.currentItem}
          onChange={this.handleChange}
          width="21rem"
        />
        <div>
          <SearchBar onChange={this.handleSearch} placeholder="SE3030_GRP_XX" />
          {this.getPageData().count !== 0 ? (
            <Group items={this.getPageData().data} />
          ) : (
            <center>
              <h2>No group with Group Id "{this.state.searchResult}"</h2>
            </center>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            {this.getPageData().count > 1 ? (
              <Page
                itemCount={this.getPageData().count}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminGroups;
