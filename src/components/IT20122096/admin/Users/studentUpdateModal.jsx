import React from "react";
import Form from "../../common/form";
import { updateGroupMember } from '../../../../services/adminService';
class StudentUpdate extends Form {
  state = {
    data: {
      groupid: "",
      userId: "",
      name: "",
      email:""
    },
    errors: {},
  };
  componentDidMount() { 
    this.setState({data:this.props.member})
   }

  handleUpdate = async () => {
    console.log(this.props.memberId);
    try {
      await updateGroupMember(this.state.data, this.props.memberId);
      localStorage.setItem("memId", "");
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
                  onClick={() => this.props.onClose()}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {this.renderInputField("Group Id", "groupid", "text")}
                  {this.renderInputField("Student Id", "userId", "text")}
                  {this.renderInputField("Name", "name", "text")}
                  {this.renderInputField("Email", "email", "text")}
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

export default StudentUpdate;
