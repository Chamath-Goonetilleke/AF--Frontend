import React from "react";
import Form from "../../common/form";
import { updateUser } from "../../../../services/userServices";

class StaffUpdate extends Form {
  state = {
    data: {
      name: this.props.member.name,
      email: this.props.member.email,
      researchField: this.props.member.researchField,
    },
    errors: {},
  };
  componentDidMount() {
    console.log(this.props.member);
  }

  handleUpdate = async () => {
    const id = this.props.memberId;
    try {
      await updateUser(id,this.state.data)
      window.location = "/profile";
    } catch (error) {
      console.log(error);
    }
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
              <div className="modal-body">
                <form>
                  {this.renderInputField("Name", "name", "text")}
                  {this.renderInputField("Email", "email", "text")}
                  {this.renderInputField(
                    "Research Field",
                    "researchField",
                    "text"
                  )}
                </form>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffUpdate;
