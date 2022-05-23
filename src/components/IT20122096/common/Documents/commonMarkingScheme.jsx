import React, { Component } from "react";
import { getAllMarkings, getMarkingById } from "../../../../services/IT20122096/markingShemeServices";
import Loading from "../loading";

import MarkingGenerator from "./markingSchema";
import Markings from "./markingTable";

class MarkingScheme extends Component {
  state = {
    markings: [],
    marking: "",
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

  handleOnView = async (id) => {
    const { data: marking } = await getMarkingById(id);
    this.setState({ marking });
  };
  onClose = () => {
    console.log("On close");
    this.setState({ marking:"" });

  }
  render() {
    return (
      this.state.markings.length===0 ? <Loading/>:
      <React.Fragment>
        <div>
          <Markings
            markings={this.state.markings}
            getDate={this.getDate}
            onView={this.handleOnView}
            onDelete={this.handleOnDelete}
          />
        </div>
        {this.state.marking !== "" && (
          <MarkingGenerator
            marking={this.state.marking}
            onClose={this.onClose}
          />
        )}
      </React.Fragment>
    );
  }
}

export default MarkingScheme;
