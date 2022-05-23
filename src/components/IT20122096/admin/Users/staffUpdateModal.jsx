import React from "react";
import Form from "../../common/form";
import { updateUser } from "../../../../services/IT20122096/userServices";
import Joi from "joi-browser";
import { toast } from "react-toastify";

class StaffUpdate extends Form {
  state = {
    data: {
      name: this.props.member.name,
      email: this.props.member.email,
      researchField: this.props.member.researchField,
    },
    errors: {},
  };
  schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    researchField: Joi.string().required(),
  };
  componentDidMount() {
    console.log(this.props.member);
  }

  handleUpdate = async () => {
    const id = this.props.memberId;

    await updateUser(id, this.state.data)
      .then(() => {
        toast.success("Successfully Updated", { autoClose: 1000 });
        setTimeout(() => (window.location = "/profile"), 2000);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="staffupdate"
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
                    Update Staff Details
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
                  {this.renderInputField("Name", "name", "text")}
                  {this.renderInputField("Email", "email", "text")}
                  {this.renderInputField(
                    "Research Field",
                    "researchField",
                    "text"
                  )}
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

export default StaffUpdate;
