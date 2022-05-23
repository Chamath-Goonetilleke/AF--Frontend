import React from "react";
import {
  createMarkingRubrik,
  deleteMarking,
  getAllMarkings,
  getMarkingById,
} from "../../../../services/IT20122096/markingShemeServices";
import Form from "../../common/form";
import Criteria from "./markingCriteria";
import MarkingGenerator from "./markingSchema";
import Markings from "./markingTable";

import Button from "@mui/material/Button";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Loading from './../../common/loading';

class MarkingScheme extends Form {
  state = {
    data: { name: "" },
    errors: {},
    markings: [],
    marking: "",
  };
  schema = {
    name: Joi.string().required().min(5).label("Marking Name"),
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

    await createMarkingRubrik(name)
      .then((res) => {
        this.setState({ marking: res.data });
        toast.success("Marking Created");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
  handleOnDelete = async (id) => {
    await deleteMarking(id)
      .then(() => {
        toast.success("Deleted Successfully", { autoClose :1000});
        setTimeout(()=>{window.location = "/profile";},2000)
        
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
  handleOnView = async (id) => {
    const { data: marking } = await getMarkingById(id);
    this.setState({ marking });
  };
  onClose = () => {
    this.setState({ marking: "" });
  };
  render() {
    const { data, errors,markings } = this.state;
    return (
      markings.length===0?<Loading/>:
      <React.Fragment>   
        <div style={{ marginTop: "2rem", width: "20rem", marginLeft: "65%" }}>
          <form onSubmit={this.handleSubmit}>
            {this.renderInputField("Enter Name", "name", "text")}
            <Button
              variant="contained"
              color="primary"
              data-bs-toggle="modal"
              data-bs-target="#markingCriteria"
              style={{ marginTop: "1rem", marginLeft: "5.5rem" }}
              onClick={() => this.handleCreate()}
              disabled={data.name === "" || Object.keys(errors).length !== 0}
            >
              Create Marking Scheme
            </Button>
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
