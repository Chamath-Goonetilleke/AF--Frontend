import { Button } from "@mui/material";
import React, { Component } from "react";
import { getGroups } from "../../../../services/IT20122096/adminService";
import { getStaff, getUser, getUsers } from "../../../../services/IT20122096/userServices";
import Loading from "../../common/loading";
import jsPDF from "jspdf";
import "jspdf-autotable";

class AdminReport extends Component {
  state = {
    columns: ["", "Group ID", "Supervisor", "Co-supervisor", "Pannel Member","Research Status"],
    groups: [],
    users:[]
  };
  async componentDidMount() {
    const { data: groups } = await getGroups();
    const { data: users } = await getUsers();
    this.setState({ groups, users });
  }
  async hadleUserSearch(id) {
    console.log(id)
    const { data: user } = await getStaff(id);
    if (!user) return <td>"Not Available"</td>;
    console.log(user.name);
    return <td>{user.name}</td>;
  }
   getDate() {
    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let postDate = date.getFullYear() + "-" + month + "-" + day;
    return postDate;
  }
  generatePDF() {
    const { columns, groups } = this.state;
    let document = new jsPDF();
    const Column = columns;
    const name = `Report_${this.getDate()}`;
     
    let Rows = [];
   groups.map((grp,index) => {
      const Group = [
        index+1,
        grp.groupid,
        grp.supercisorid ? "Availabel" : "Not Available",
        grp.cosupercisorid ? "Availabel" : "Not Available",
        grp.panelmember ? "Availabel" : "Not Available",
        grp.isOngoing ? "In Progress" : "Finished",
      ];
      Rows.push(Group);
    });
    document.text("Research Group Summary", 60, 18);
    document.autoTable(Column, Rows, { startY: 40 });
    document.text(`Date :${this.getDate()}`, 150, 38);
    document.save(name);
  };
  render() {
    const { columns, groups } = this.state;
    return groups.length === 0 ? (
      <Loading />
    ) : (
        <div>
          <div style={{margin:"1rem",marginLeft:"77%"}}>
            <Button variant="contained" color="error" onClick={()=>this.generatePDF()}>Genrate Reoprt</Button>
          </div>
        <div style={{ width: "80%", marginLeft: "8rem" }}>
          <table class="table">
            <thead>
              <tr className="table-primary">
                {columns.map((col, index) => (
                  <th scope="col">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{group.groupid}</td>
                  <td
                    className={
                      group.supercisorid ? "table-success" : "table-danger"
                    }
                  >
                    {group.supercisorid ? "Available" : "Not Available"}
                  </td>
                  <td
                    className={
                      group.cosupercisorid ? "table-success" : "table-danger"
                    }
                  >
                    {group.cosupercisorid ? "Available" : "Not Available"}
                  </td>
                  <td
                    className={
                      group.panelmember ? "table-success" : "table-danger"
                    }
                  >
                    {group.panelmember ? "Available" : "Not Available"}
                  </td>
                  <td
                    className={
                      group.isOngoing ? "table-warning" : "table-secondary"
                    }
                  >
                    {group.isOngoing ? "In Progress" : "Finished"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdminReport;
