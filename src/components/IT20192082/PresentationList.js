import React, { Component } from 'react';
import axios from 'axios';
import {getResearchGroup} from "../../services/panelService" 

export default class PresentationList extends Component {
  
  constructor(props){
    super(props);

    this.state={
        researchgroup:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    getResearchGroup(id).then((res) => {
      if(res.data.success) {
        this.setState({
            researchgroup:res.data.researchgroup
        });
        console.log(this.state.researchgroup);
      }
    })

  }

  render() {

    const {groupid,presentation} = this.state.researchgroup;
    const id = this.props.match.params.id;

    return (
        <div>
        <ul class="list-group">
        <li class="list-group-item active"><h2>{groupid}</h2></li>
        <li class="list-group-item">Download Presentation : <a href={presentation}>
        <button type="button" class="btn btn-warning"> Download</button>
        </a></li>
        </ul>
        <br/>
        
        <br/>
        <br/>
        <a href={`/marks/${id}`} style={{textDecoration:'none'}} >
        <button className='btn btn-success' type="submit">Give Marks for Group : {groupid}</button>
        </a>
        </div> 
    );
  };
};