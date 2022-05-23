import React, { Component } from "react";
import {
  getGroupMember,
  getGroups,
} from "../../../services/IT20122096/adminService";
import { getUser } from "../../../services/IT20122096/userServices";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Loading from "./../common/loading";
import Chat from "./Chat";

class StudentGroup extends Component {
  state = { user: {}, group: {}, members: [], isUser: false };

  async componentDidMount() {
    const { data: user } = await getUser();
    const userId = user.userId;

    const members = (await getGroupMember()).data;
    
    const member = members.filter(
      (member) =>
        (member.userId + "").toLowerCase() === (userId + "").toLowerCase()
    );

    if (member.length !== 0) {
      const groupId = member[0].groupid;
      localStorage.setItem("groupId", groupId);
      const groups = (await getGroups()).data;
      
      const group = groups.filter((group) => group.groupid === groupId);

      this.setState({ user, group: group[0] });
      this.setState({ isUser: true });
    } else {
      this.setState({ members });
      return;
    }
    this.setState({ members });
    
  }

  render() {
    const { group, isUser, members } = this.state;
    return members.length === 0 ? (
      <Loading />
    ) : (
      <div style={{ display: "flex" }}>
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
                  <Button
                    href="/student-profile"
                    style={{ width: "16rem", color: "white" }}
                    variant="contained"
                    color="error"
                  >
                    View
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <Button
              className="card-body"
              href="/register-group"
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
                <center>
                  <Avatar sx={{ width: 80, height: 80 }}>
                    <span style={{ fontSize: "3rem" }}>+</span>
                  </Avatar>
                </center>

                <br />
                <p>Create a Group</p>
              </div>
            </Button>
          )}
        </div>
        {isUser === true && <Chat/>}
      </div>
    );
  }
}

export default StudentGroup;
