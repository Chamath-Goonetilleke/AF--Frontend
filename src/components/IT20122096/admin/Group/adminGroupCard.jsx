import React, { Component } from "react";
import AddPannel from "./addPannelModel";
class AdminGroupCard extends Component {
  state = {
    id:"",
    groupid: "",
  };
  handleAdd = (id, groupid) => {
    this.setState({ id });
    this.setState({ groupid });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.items.map((item) => (
              <div key={item._id} className="col 1">
                <div className="card" style={{ width: "18rem" }}>
                  <h5
                    className="card-header"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {item.groupid}
                  </h5>
                  <div className="card-body">
                    <div>
                      <p className="card-text">
                        Supervisor :{" "}
                        {(item.supercisorid && "Available") || "Unavailabel"}
                      </p>
                      <p className="card-text">
                        Co-Supervisor :{" "}
                        {(item.cosupercisorid && "Available") || "Unavailabel"}
                      </p>
                      <p className="card-text">
                        Pannel Member :{" "}
                        {(item.panelmember && "Assigned") || "Unassigned"}
                      </p>
                    </div>
                    {(!item.panelmember) &&
                      <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#addPannel"
                        style={{ width: "16rem", marginTop: "1rem" }}
                        onClick={() => this.handleAdd(item._id,item.groupid)}
                      >
                        Add Pannel
                      </button>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AddPannel id={this.state.id} groupid={ this.state.groupid}/>
      </div>
    );
  }
}

export default AdminGroupCard;
