import React, { Component } from 'react';
import { createCriteria } from '../../../../services/markingCriteria';
import Form from '../../common/form';

class Criteria extends Form {
  state = {
    data: {
      name: "",
      value: "",
    },
    errors: {},
  };
  doSubmit = async() => {
    const data = { ...this.state.data, markingRubrikId: this.props.marking._id };
    const response=""
    try {
     response =await  createCriteria(data)
    } catch (error) {
      console.log(response.data)
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInputField("Enter Criteria", "name", "text")}
        {this.renderInputField("Enter Value", "value", "text")}
        <button type="submit" className="btn btn-primary">
          Create Criteria
        </button>
      </form>
    );
  }
}
 
export default Criteria;