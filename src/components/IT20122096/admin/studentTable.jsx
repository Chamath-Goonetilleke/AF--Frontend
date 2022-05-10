import React, { Component } from "react";
import { paginate } from "../../../services/paginateService";
import { getGroupMember, getGroupMemberById, getGroups } from "../../../services/adminService";
import SearchBar from "../common/searchBar";
import Page from "../common/pagination";
import StudentUpdate from "../student/studentUpdateModal";

class StudentTable extends Component {
  state = {
    groups: [],
    groupMembers: [],
    pagedGroups: [],
    pageSize: 2,
    searchResult: "",
    currentPage: 1,
    itemCount: 0,
    member: {},
    memberId:""
  };

  async componentDidMount() {
    const { data: groups } = await getGroups();
    const { data: groupMembers } = await getGroupMember();
    this.setState({
      groups: groups,
      itemCount: groups.length,
      groupMembers: groupMembers,
    });
  }
  handleSearch = (item) => {
    const itemCount = this.state.groups.length;
    if (item !== "") {
      this.setState({ searchResult: item, itemCount: 0 });
    } else {
      this.setState({ searchResult: item, itemCount: itemCount });
    }
  };
  getPageData = () => {
    const { pageSize, groups, searchResult, currentPage } = this.state;
    let pagedGroups = [];
    if (searchResult) {
      const group = groups.filter((g) =>
        (g.groupid + "").toLowerCase().startsWith(searchResult.toLowerCase())
      );
      pagedGroups = paginate(group, currentPage, pageSize);
    } else {
      pagedGroups = paginate(groups, currentPage, pageSize);
    }

    return pagedGroups;
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleOnUpdate = async (id) => {
    const { data: member } = await getGroupMemberById(id);
    this.setState({ member });
    this.setState({ memberId: id });
  };
  render() {
    return (
      <div>
        <SearchBar
          onChange={this.handleSearch}
          placeholder="example@gmail.com"
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Group</th>
              <th scope="col">Student Id</th>
              <th scope="col">Student Name</th>
            </tr>
          </thead>
          <tbody>
            {this.getPageData().map((group) => (
              <tr key={group._id}>
                <th scope="row">{group.groupid}</th>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "5px" }}>{member.userId}</div>
                      </tr>
                    ))}
                </td>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "5px" }}>{member.name}</div>
                      </tr>
                    ))}
                </td>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "5px" }}>
                          <button
                            type="button"
                            className="btn btn-warning btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => this.handleOnUpdate(member._id)}
                          >
                            UPDATE
                          </button>
                        </div>
                      </tr>
                    ))}
                </td>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "5px" }}>
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
                        </div>
                      </tr>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
            marginRight: "5rem",
          }}
        >
          <StudentUpdate member={this.state.member} memberId={ this.state.memberId} />

          <Page
            itemCount={this.state.itemCount}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default StudentTable;
