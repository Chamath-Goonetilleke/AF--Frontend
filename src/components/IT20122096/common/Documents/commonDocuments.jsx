import React, { Component } from "react";
import MarkingScheme from "./commonMarkingScheme";
import SideMenuList from "../sideMenuList";
import DocumentTemplate from "./documentTemplates";

class CommonDocuments extends Component {
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
      <div style={{ display: "flex",marginTop:"5rem" }}>
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
export default CommonDocuments;
