import React, { Component } from "react";

import Form from "../../common/form";
import { ToastContainer, toast } from "react-toastify";
import  Joi  from "joi-browser";
import { createCriteria } from "../../../../services/IT20122096/markingCriteria";

class Criteria extends Form {
  state = {
    data: {
      name: "",
      value: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().min(5).max(255),
    value: Joi.number().min(0).max(100)
  };
  handleUpdate = async () => {
    const data = {
      ...this.state.data,
      markingRubrikId: this.props.marking._id,
    };

    await createCriteria(data)
      .then(() => {
        toast.success("Criteria Added", { autoClose: 1000 });
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
          id="markingCriteria"
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
                  <span>Add Criterias to {this.props.marking.name}</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => (window.location = "/profile")}
                ></button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  {this.renderInputField("Enter Criteria", "name", "text")}
                  {this.renderInputField("Enter Value", "value", "number")}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => (window.location = "/profile")}
                  >
                    Done
                  </button>
                  {this.renderButton(
                    "Create Criteria",
                    "btn btn-primary",
                    "submit",
                    this.handleUpdate
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Criteria;
