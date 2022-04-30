import React, { Component } from 'react'
import { createMarkingRubrik } from '../../services/markingShemeServices';
import Form from './common/form';
import Criteria from './markingCriteria';

class MarkingScheme extends Form {
  state = {
    data: { name: "" },
    marking:{},
    errors: {},
  };
  doSubmit = async () => {
    const { name } = this.state.data;
    let res = "";
    try {
      res = await createMarkingRubrik(name);
      this.setState({marking:res.data})
    } catch (error) {
      console.log(res.data);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("Enter Name", "name", "text")}
          <button type="submit" className="btn btn-primary">
            Create Marking Scheme
          </button>
        </form>
        <Criteria marking={ this.state.marking}/>
      </div>
    );
  }
}
 
export default MarkingScheme;