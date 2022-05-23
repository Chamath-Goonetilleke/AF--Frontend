import React, { Component } from 'react';
import { createCriteria } from '../../../../services/IT20122096/markingCriteria';
import Form from '../form';

class Criteria extends Form {
  state = {
    data: {
      name: "",
      value: "",
    },
    errors: {},
  };
  handleUpdate = async () => {
    const data = {
      ...this.state.data,
      markingRubrikId: this.props.marking._id,
    };
    const response = "";
    try {
      response = await createCriteria(data);
    } catch (error) {
      console.log(response.data);
    }
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
                  <span>
                    Add Criterias to {this.props.marking.name}
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
                  {this.renderInputField("Enter Criteria", "name", "text")}
                  {this.renderInputField("Enter Value", "value", "text")}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={()=>window.location="/profile"}
                >
                  Done
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.handleUpdate()}
                >
                  Create Criteria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Criteria;