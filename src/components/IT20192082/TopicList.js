import React, { Component } from 'react';
import axios from 'axios';
import {topics} from "../../services/panelService"

export default class TopicList extends Component {
constructor(props){
  super(props);

  this.state = {
    topics:[]
  };
}

componentDidMount(){
  this.retrieveTopics();
}

async retrieveTopics(){
  await topics().then(res =>{

    console.log(res.data);
    if(res.data.success){
      this.setState({
        topics:res.data.existingTopics
      });

      console.log(this.state.topics)
    }
  })
  .catch((err)=>{
    console.log(err);
  })

  
}
  render() {
    return (
    <div className='container'>
    <p>All Topics</p>
    <table className="table">
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Topic</th>
          <th scope='col'>GroupID</th>
          <th scope='col'>Field</th> 
        </tr>
      </thead>
      <tbody>
      {this.state.topics.map((topics,index) =>(
        <tr key={index}>
          <th scope='row'>{index+1}</th>
          <td>
          <a href={`/topic/${topics._id}`} style={{textDecoration:'none'}}>
          {topics.topic}
          </a>
          </td>
          <td>{topics.groupid}</td>
          <td>{topics.field}</td>  
        </tr>      
      ))}
      
    </tbody>
    </table>
    </div>
    )
 }
}