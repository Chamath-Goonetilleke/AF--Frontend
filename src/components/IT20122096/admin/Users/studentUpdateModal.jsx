import React from "react";
import Form from "../../common/form";
import { updateGroupMember } from "../../../../services/IT20122096/adminService";
import { toast } from "react-toastify";
import  Joi from 'joi-browser';
class StudentUpdate extends Form {
  state = {
    data: {
      groupid: "",
      userId: "",
      name: "",
      email: "",
    },
    errors: {},
  };
  schema = {
    groupid: Joi.string().label("Group Id"),
    userId: Joi.string().label("Student Id"),
    name: Joi.string().label("Name"),
    email: Joi.string().email().label("Email"),
  };
  componentDidMount() {
    this.setState({ data: this.props.member });
  }

  handleUpdate = async () => {
    console.log(this.props.memberId);

    await updateGroupMember(this.state.data, this.props.memberId)
      .then(() => {
        toast.success("Successfully Updated", { autoClose: 1000 });
        setTimeout(() => (window.location = "/profile"), 2000);
      })
      .catch((error) => toast.error(error.response.data));
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="static-backdrop"
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
                  onClick={() => this.props.onClose()}
                ></button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  {this.renderInputField("Group Id", "groupid", "text")}
                  {this.renderInputField("Student Id", "userId", "text")}
                  {this.renderInputField("Name", "name", "text")}
                  {this.renderInputField("Email", "email", "text")}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => this.props.onClose()}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.handleUpdate()}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentUpdate;
