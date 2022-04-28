import React, { Component } from 'react'
import AdminGroups from './adminGroups';
import NavbarInside from './common/navbarInside';

export default class AdminProfile extends Component {
  state = {
    currentItem:"Groups"
  };
  handleNavSelect = (item) => {
    this.setState({currentItem:item})
  };
  render() {
    const items = ["Groups", "Documents", "Users", "Report"];
    const currentItem = this.state.currentItem;
    return (
      <div style={{ marginTop: "5rem" }}>
        <NavbarInside
          items={items}
          onChange={this.handleNavSelect}
          currentItem={this.state.currentItem}
        />
        <div style={{ marginTop: "4rem" }}>
          {currentItem === "Groups" ? <AdminGroups/> : null}
        </div>
      </div>
    );
  }
}
 
