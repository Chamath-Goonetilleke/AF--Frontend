import React, { Component } from "react";
import { researchgroups } from "../../services/IT20192082/panelService";
//import Card from './Card'
import { Card } from "react-bootstrap";

export default class ResearchgroupsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      researchgroup: [],
    };
  }

  componentDidMount() {
    this.retrieveResearchgroups();
  }

  async retrieveResearchgroups() {
    // await researchgroups(uId).then(res =>{

    //   console.log(res.data);

    //     this.setState({
    //       researchgroups:res.data
    //     });

    // })
    try {
      const uId = localStorage.getItem("userId");
      const value = await researchgroups(uId);
      console.log(value.data);
      this.setState({
        researchgroup: value.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        {this.state.researchgroup.map((researchgroups, index) => (
          <div className="card-columns" key={index}>
            <div className="card text-white bg-success mb-3 w-50 p-3 ">
              <div className="card-header">
                Research Group ID : {researchgroups.groupid}
              </div>
              <div className="card-body">
                <a href={`/researchgroup/${researchgroups._id}`}>
                  <button type="button" class="btn btn-info">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
