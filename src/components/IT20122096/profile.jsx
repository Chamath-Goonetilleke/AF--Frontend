import React, { Component } from "react";
import AdminProfile from "./adminProfile";
import { getCurrentUser } from "../../services/authServices";
import StudentProfile from "./studentProfile";
import SupervisorProfile from "./supervisorProfile";
import CosupervisorProfile from "./co-supervisorProfile";
import PannelMemberProfile from "./pannelMemberProfile";

export default class Profile extends Component {
  state = { user: getCurrentUser() };

  render() {
    const { userRole } = this.state.user;
    return (
      <div>
        {userRole === "Admin" ? (
          <AdminProfile />
        ) : userRole === "Student" ? (
          <StudentProfile />
        ) : userRole === "Supervisor" ? (
          <SupervisorProfile />
        ) : userRole === "Co-Supervisor" ? (
          <CosupervisorProfile />
        ) : userRole === "Pannel Member" ? (
          <PannelMemberProfile />
        ) : null}
      </div>
    );
  }
}
