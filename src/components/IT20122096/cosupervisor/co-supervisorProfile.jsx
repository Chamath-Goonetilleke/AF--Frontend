import React, { Component } from "react";
import { getUser } from "../../../services/userServices";
import NavbarInside from "../common/navbarInside";
import Co_SupervisorGroups from "./co-supervisorGroups";

class CosupervisorProfile extends Component {
  state = {
    items: ["Groups", "Request", "Documents", "Reports"],
    currentItem: "Groups",
    pageSize: 3,
    currentPage: 1,
    user:{}
  };

  async componentDidMount() { 
    const { data: user } = await getUser();
    this.setState({ user });
   }

  handleChange = (item) => {
    this.setState({ currentItem: item });
  };

  render() {
    const { items, currentItem,user } = this.state;
    return (
      <div>
        <center>
          <h1>Co-Supervisor : { user.name}</h1>
        </center>
        <div>
          <NavbarInside
            items={items}
            onChange={this.handleChange}
            currentItem={currentItem}
          />
          {currentItem === "Groups" ? (
            <Co_SupervisorGroups />
          ) : currentItem === "Request" ? (
            <div>req</div>
          ) : currentItem === "Documents" ? (
            <div>docs</div>
          ) : currentItem === "Reports" ? (
            <div>repo</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CosupervisorProfile;
