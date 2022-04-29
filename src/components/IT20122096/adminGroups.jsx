import React, { Component } from "react";
import Group from "./common/group";
import Page from "./common/pagination";
import { paginate } from "../../services/paginateService";
import { getGroups } from "../../services/adminService";

class AdminGroups extends Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    groups: [],
  };
  async componentDidMount() {
    const { data: groups } = await getGroups();
    this.setState({ groups });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  getPageData = () => {
    const { currentPage, pageSize, groups } = this.state;
    const data = paginate(groups, currentPage, pageSize);
    return data;
  };

  render() {
    return (
      <div>
        <Group items={this.getPageData()} />
        <div style={{ display: "flex", justifyContent: "center", paddingTop:"2rem" }}>
          <Page
            itemCount={this.state.groups.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default AdminGroups;
