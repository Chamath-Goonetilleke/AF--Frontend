import React, { Component } from "react";
import {
  createMarkingRubrik,
  deleteMarking,
  getAllMarkings,
  getMarkingById,
} from "../../../../services/markingShemeServices";
import Form from "../../common/form";
import Criteria from "./markingCriteria";
import MarkingGenerator from "./markingSchema";
import Markings from "./markingTable";

class MarkingScheme extends Form {
  state = {
    data: { name: "" },
    errors: {},
    markings: [],
    marking: {},
  };

  async componentDidMount() {
    const { data: markings } = await getAllMarkings();
    this.setState({ markings });
  }
  getDate = (postdate) => {
    let date = new Date(postdate);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let postDate = date.getFullYear() + "-" + month + "-" + day;
    return postDate;
  };
  handleCreate = async () => {
    const { name } = this.state.data;
    let res = "";
    try {
      res = await createMarkingRubrik(name);
      this.setState({ marking: res.data });
    } catch (error) {
      console.log(res.data);
    }
  };
  handleOnDelete = async (id) => {
    try {
      await deleteMarking(id);
      window.location = "/profile";
    } catch (error) {
      console.log(error);
    }
  };
  handleOnView = async (id) => {
    const { data: marking } = await getMarkingById(id);
    this.setState({ marking });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "2rem", width: "20rem", marginLeft: "65%" }}>
          <form onSubmit={this.handleSubmit}>
            {this.renderInputField("Enter Name", "name", "text")}
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#markingCriteria"
              style={{ marginTop: "1rem", marginLeft: "7.7rem" }}
              onClick={() => this.handleCreate()}
            >
              Create Marking Scheme
            </button>
          </form>
        </div>
        <div>
          <Markings
            markings={this.state.markings}
            getDate={this.getDate}
            onView={this.handleOnView}
            onDelete={this.handleOnDelete}
          />
        </div>
        <Criteria marking={this.state.marking} />
        <MarkingGenerator marking={this.state.marking} />
      </React.Fragment>
    );
  }
}

export default MarkingScheme;
