import React, { Component } from "react";
import AdminProfile from "./admin/adminProfile";
import { getCurrentUser } from "../../services/IT20122096/authServices";
import StudentProfile from "./student/studentProfile";
import SupervisorProfile from "./supervisor/supervisorProfile";
import CosupervisorProfile from "./cosupervisor/co-supervisorProfile";
import PannelMemberProfile from "./pannelMember/pannelMemberProfile";

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
