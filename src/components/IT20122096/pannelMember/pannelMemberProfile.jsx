import React, { Component } from "react";
import { getUser } from "../../../services/IT20122096/userServices";
import NavbarInside from "../common/navbarInside";
import PannelMemberGroups from "./pannelMemberGroups";
import TopicRequestList from "./topicRequestList";
import CommonDocuments from "./../common/Documents/commonDocuments";
import Report from "./../../IT20192082/Report";
import ResearchgroupsList from "./../../IT20192082/ResearchgroupsList";
import TopicList from "./../../IT20192082/TopicList";

class PannelMemberProfile extends Component {
  state = {
    items: ["Groups", "Request", "Documents", "Report"],
    currentItem: "Groups",
    pageSize: 3,
    currentPage: 1,
    user: {},
  };

  async componentDidMount() {
    const { data: user } = await getUser();
    this.setState({ user });
  }

  handleChange = (item) => {
    this.setState({ currentItem: item });
  };

  render() {
    const { items, currentItem, user } = this.state;
    return (
      <div>
        <center>
          <h1>Pannel Member : {user.name}</h1>
        </center>
        <div>
          <NavbarInside
            items={items}
            onChange={this.handleChange}
            currentItem={currentItem}
          />
          {currentItem === "Groups" ? (
            <ResearchgroupsList />
          ) : currentItem === "Request" ? (
            <TopicList />
          ) : currentItem === "Documents" ? (
            <CommonDocuments />
          ) : currentItem === "Report" ? (
            <Report />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PannelMemberProfile;
