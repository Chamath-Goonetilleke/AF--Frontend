import React, { Component } from "react";
import MarkingScheme from "./adminMarkingScheme";
import SideMenuList from "../../common/sideMenuList";
import DocumentTemplate from "./documentTemplates";

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
        <div style={{width:"70rem"}}>
          {currentItem === "Marking Schemas" ? (
            <MarkingScheme/>
          ) : currentItem === "Document Templates" ? (
            <DocumentTemplate/>
          ) : null}
        </div>
      </div>
    );
  }
}
export default AdminDocuments;
