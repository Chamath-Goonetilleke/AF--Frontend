import React, { Component } from "react";
import { getUser } from "../../../services/IT20122096/userServices";
import NavbarInside from "../common/navbarInside";
import CommonDocuments from './../common/Documents/commonDocuments';
import AcceptedStaffResearchTopics from './../../IT20216078/staff/StaffResearchAcceptedTopics';
import StaffResearchTopicRequests from './../../IT20216078/staff/StaffResearchTopicRequests';

class CosupervisorProfile extends Component {
  state = {
    items: ["Groups", "Request", "Documents"],
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
            <AcceptedStaffResearchTopics/>
          ) : currentItem === "Request" ? (
            <StaffResearchTopicRequests/>
          ) : currentItem === "Documents" ? (
            <CommonDocuments/>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CosupervisorProfile;
