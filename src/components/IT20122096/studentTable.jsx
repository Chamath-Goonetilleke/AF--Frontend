import React, { Component } from "react";
import { paginate } from "../../services/paginateService";
import { getGroups } from "../../services/adminService";

class StudentTable extends Component {
  state = { groups: [], pagedGroups: [], pageSize: 3 };

  async componentDidMount() {
    const { data: groups } = await getGroups();
    this.setState({ groups });
  }
  getPageData = () => {
    const { pageSize, groups } = this.state;
    const { currentPage } = this.props;
    const pagedGroups = paginate(groups, currentPage, pageSize);
    return pagedGroups;
  };
  render() {
    return (
      <div>
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
                <th scope="row">{group.groupe}</th>
                {/* IT number */}
                <td>
                  <tr>
                    <td>{group.leaderitnumber}</td>
                  </tr>
                  <tr>
                    <td>{group.st2itnumber}</td>
                  </tr>
                  <tr>
                    <td>{group.st3itnumber}</td>
                  </tr>
                  <tr>
                    <td>{group.st4itnumber}</td>
                  </tr>
                </td>
                {/* Name */}
                <td>
                  <tr>
                    <td>{group.leadername}</td>
                  </tr>
                  <tr>
                    <td>{group.st2name}</td>
                  </tr>
                  <tr>
                    <td>{group.st3name}</td>
                  </tr>
                  <tr>
                    <td>{group.st4name}</td>
                  </tr>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentTable;
