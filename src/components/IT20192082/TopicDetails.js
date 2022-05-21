import React, { Component } from 'react';
import axios from 'axios';
import {getTopic} from "../../services/panelService"


export default class TopicDetails extends Component {
  
  constructor(props){
    super(props);

    this.state={
      topic:{}
    };
  }

  async componentDidMount(){

    const id = this.props.match.params.id;

    await getTopic(id).then((res) => {
      if(res.data.success) {
        this.setState({
          topic:res.data.topic
        });
        console.log(this.state.topic);
      }
    })

  }

  render() {

    const {topic,groupid,field,file,status} = this.state.topic;
    const id = this.props.match.params.id;

    return (
        <div>
        <ul className="list-group" >
        <li className="list-group-item active"><h5>{topic}</h5></li>
        <br/>
        <li className="list-group-item">Group ID : {groupid}</li>
        <li className="list-group-item">Field : {field}</li>
        <li className="list-group-item">Status : {status}</li>
        <li className="list-group-item">Download File : <a href={file}>
        <button type="button" className="btn btn-danger">Download</button>
        </a></li>
        </ul>
        <br/>
        <a href={`/edit/${id}`}>
        <button type="button" className="btn btn-success">Evaluate</button>
        </a>
        </div> 
    );
  };
};