import React, { Component } from "react";
import MarkingScheme from "./adminMarkingScheme";
import SideMenuList from "../../common/sideMenuList";

class AdminDocuments extends Component {
  state = {
    items: ["Marking Schemas", "Document Templates"],
    currentItem: "Marking Schemas",
  };
  handleChange = (item) => {
    this.setState({ currentItem: item });
  };
  render() {
    const { currentItem, items } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <SideMenuList
          items={items}
          currentItem={currentItem}
          onChange={this.handleChange}
        />
        <div>
          {currentItem === "Marking Schemas" ? (
            <MarkingScheme/>
          ) : currentItem === "Document Templates" ? (
            <div>templates</div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default AdminDocuments;
