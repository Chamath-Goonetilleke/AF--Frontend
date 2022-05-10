import React from "react";
import { updateGroupMember } from "../../../services/adminService";
import Form from "../common/form";

class StudentUpdate extends Form {
  state = {
    data: {
      groupid: "",
      userId: "",
      name: "",
    },
    errors: {},
  };

  handleUpdate = async () => {
    console.log(this.state.data);
    try {
      await updateGroupMember(this.state.data, this.props.memberId);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  <span style={{ marginLeft: "8rem" }}>
                    Update Student Details
                  </span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {this.renderInputField("Group Id", "groupid", "text")}
                  {this.renderInputField("Student Id", "userId", "text")}
                  {this.renderInputField("Name", "name", "text")}
                  {/* {this.renderInputField("Email", "email", "text")} */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    this.handleUpdate();
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentUpdate;
