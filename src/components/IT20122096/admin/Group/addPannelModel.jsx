import React, { Component } from "react";
import { paginate } from "../../../../services/IT20122096/paginateService";
import { getUsers } from "../../../../services/IT20122096/userServices";
import Page from "../../common/pagination";
import SearchBar from "../../common/searchBar";
import PannelTable from "./pannelTable";

class AddPannel extends Component {
  state = {
    pannelMembers: [],
    itemCount: 0,
    pageSize: 3,
    currentPage: 1,
    searchQuary: "",
  };
  async componentDidMount() {
    let data = [];
    data = (await getUsers()).data;
    const pannelMembers = data.filter(
      (user) => user.userRole === "Pannel Member"
    );
    this.setState({ pannelMembers });
  }
  handleSearch = (quary) => {
    this.setState({ searchQuary: quary });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  getPageData = () => {
    const { pannelMembers, currentPage, pageSize, searchQuary } = this.state;

    let filterdGroups = [];
    if (searchQuary) {
      filterdGroups = pannelMembers.filter((user) =>
        (user.email + "").toLowerCase().startsWith(searchQuary.toLowerCase())
      );
    } else {
      filterdGroups = pannelMembers;
    }

    const pagedGroups = paginate(filterdGroups, currentPage, pageSize);
    return { data: pagedGroups, count: pannelMembers.length };
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="addPannel"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{ width: "50rem", marginLeft: "-12rem" }}
            >
              <div className="modal-header">
                <div
                  style={{
                    marginLeft: "12rem",
                  }}
                >
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Add Pannel Member to : {this.props.groupid}
                  </h5>
                </div>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <SearchBar
                    onChange={this.handleSearch}
                    placeholder="example@gmail.com"
                  />

                  <PannelTable
                    pannelMembers={this.getPageData().data}
                    groupid={this.props.id}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "2rem",
                    }}
                  >
                    <Page
                      itemCount={this.getPageData().count}
                      pageSize={this.state.pageSize}
                      currentPage={this.state.currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPannel;
