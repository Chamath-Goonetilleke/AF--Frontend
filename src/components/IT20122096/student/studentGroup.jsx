import React, { Component } from "react";
import { getGroupMember, getGroups } from "../../../services/adminService";
import { getUser } from "../../../services/userServices";

import Icon from "@mui/material/Icon";

class StudentGroup extends Component {
  state = { user: {}, group: {}, isUser: false };

  async componentDidMount() {
    const { data: user } = await getUser();
    const userId = user.userId;

    const members = (await getGroupMember()).data;
    const member = members.filter((member) => member.userId === userId);

    if (member.length !== 0) {
      const groupId = member[0].groupid;
      const groups = (await getGroups()).data;
      const group = groups.filter((group) => group.groupid === groupId);

      this.setState({ user, group: group[0] });
      this.setState({ isUser: true });
    }
    else {
      return;
    }
  }

  render() {
    const { group, isUser } = this.state;
    console.log(group)
    return (
      <div>
        <div className="card" style={{ width: "18rem", margin: "10rem" }}>
          {isUser === true ? (
            <React.Fragment>
              <h5
                className="card-header"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {group.groupid}
              </h5>
              <div className="card-body">
                <div>
                  <p className="card-text">
                    Supervisor :
                    {(group.supercisorid && "Available") || "Unavailable"}
                  </p>
                  <p className="card-text">
                    Co-Supervisor :
                    {(group.cosupercisorid && "Available") || "Unavailable"}
                  </p>
                  <p className="card-text">
                    Pannel Member :
                    {(group.panelmember && "Available") || "Unavailable"}
                  </p>
                  <button style={{ width: "16rem" }} className="btn btn-danger">
                    View
                  </button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <button
              className="card-body"
              style={{
                width: "20rem",
                height: "15rem",
                backgroundColor: "lightgray",
              }}
            >
              <div
                style={{
                  height: "8rem",
                }}
              >
                <Icon
                  baseClassName="fas"
                  className="fa-plus-circle"
                  fontSize="small"
                />
                <br />
                <p>Create a Group</p>
              </div>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default StudentGroup;
