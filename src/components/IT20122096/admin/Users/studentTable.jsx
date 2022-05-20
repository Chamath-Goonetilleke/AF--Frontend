import React, { Component } from "react";
import { paginate } from "../../../../services/paginateService";
import {
  deleteGroupMember,
  getGroupMember,
  getGroupMemberById,
  getGroups,
} from "../../../../services/adminService";
import SearchBar from "../../common/searchBar";
import Page from "../../common/pagination";
import StudentUpdate from "./studentUpdateModal";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

class StudentTable extends Component {
  state = {
    groups: [],
    groupMembers: [],
    pagedGroups: [],
    pageSize: 4,
    searchResult: "",
    currentPage: 1,
    itemCount: 0,
    member: {},
    memberId: "",
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
  //TODO:update need atention

  handleOnUpdate = async (id) => {
    const { data: member } = await getGroupMemberById(id);
    this.setState({ member });
    this.setState({ memberId: id });
  };
  onClose = () => {
    this.setState({ memberId: "" });
  };
  handleOnDelete = async (id) => {
    try {
      await deleteGroupMember(id);
      window.location = "/profile";
    } catch (error) {
      console.log(error);
    }
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
              <th scope="col">Student Email</th>
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
                        <div style={{ padding: "8px" }}>{member.userId}</div>
                      </tr>
                    ))}
                </td>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "8px" }}>{member.name}</div>
                      </tr>
                    ))}
                </td>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "8px" }}>{member.email}</div>
                      </tr>
                    ))}
                </td>
                <td>
                  {this.state.groupMembers
                    .filter((m) => m.groupid === group.groupid)
                    .map((member) => (
                      <tr key={member._id}>
                        <div style={{ padding: "5px" }}>
                          <Button
                            variant="contained"
                            color="warning"
                            size="small"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => this.handleOnUpdate(member._id)}
                          >
                            Update
                          </Button>
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
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            startIcon={<DeleteIcon />}
                            style={{ marginLeft: "1rem" }}
                            onClick={() => this.handleOnDelete(member._id)}
                          >
                            Delete
                          </Button>
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
          {this.state.memberId !== "" && (
            <StudentUpdate
              member={this.state.member}
              memberId={this.state.memberId}
              onClose={this.onClose}
            />
          )}

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
