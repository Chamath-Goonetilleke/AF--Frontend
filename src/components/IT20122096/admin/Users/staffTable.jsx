import React, { Component } from "react";
import { deleteUser, getStaff } from "../../../../services/IT20122096/userServices";
import StaffUpdate from "./staffUpdateModal";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import Loading from "../../common/loading";

class StaffTable extends Component {
  state = {
    member: {},
    memberId: "",
  };

  handleUpdate = async (id) => {
    const { data: member } = await getStaff(id);
    this.setState({ member });
    this.setState({ memberId: id });
  };
  onClose = () => {
    this.setState({ memberId: "" });
  };
  handleDelete = async (id) => {
    await deleteUser(id)
      .then(() => {
        toast.success("Successfully Deleted", { autoClose: 1000 });
        setTimeout(() => (window.location = "/profile"), 2000);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  render() {
    const { items } = this.props;
    return (
      items.length===0?<Loading/>:
      <div>
        <div
          className="container"
          style={{ marginTop: "2rem", width: "70rem" }}
        >
          <div className="row" style={{ marginBottom: "1rem" }}>
            <div className="col" style={{ fontWeight: "bold" }}>
              Name
            </div>
            <div className="col" style={{ fontWeight: "bold" }}>
              Email
            </div>
            <div className="col" style={{ fontWeight: "bold" }}>
              Research Field
            </div>
            <div className="col" style={{ fontWeight: "bold" }}></div>
          </div>
          {items.map((item) => (
            <div
              key={item._id}
              className="row"
              style={{
                marginBottom: "1rem",
                borderBottom: "solid black 1px",
                paddingBottom: "1rem",
              }}
            >
              <div className="col">{item.name}</div>
              <div className="col">{item.email}</div>
              <div className="col">{item.researchField}</div>
              <div className="col">
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  data-bs-toggle="modal"
                  data-bs-target="#staffupdate"
                  onClick={() => this.handleUpdate(item._id)}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  style={{ marginLeft: "1rem" }}
                  onClick={() => this.handleDelete(item._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
        {this.state.memberId !== "" && (
          <StaffUpdate
            member={this.state.member}
            memberId={this.state.memberId}
            onClose={this.onClose}
          />
        )}
      </div>
    );
  }
}

export default StaffTable;
