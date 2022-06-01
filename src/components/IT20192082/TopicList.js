import React, { Component } from 'react';
import { topics } from "../../services/IT20192082/panelService";


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

async filterData(topics,searchKey){
  const result = await topics.filter((topic) => 
    topic.groupid.toLowerCase().includes(searchKey) ||topic.topic.toLowerCase().includes(searchKey)
 )
 this.setState({ topics: result })
}

handleSearchArea = async (e) => {
 const searchKey = e.currentTarget.value;

 await topics().then(res =>{

   if(res.data.success){
       this.filterData(res.data.existingTopics,searchKey)
     
   }
 });
}

  render() {
    return (
      <div className='container'>
<br/>
        
      <div className='container'>
      <br/>
      <br/>

      <div className='col-lg-3 mt-2 mb-2 ml-2'>
        <input
        className='form-control' 
        type='search'
        placeholder='Search'
        name='searchQuery'
        onChange={this.handleSearchArea}>
        </input>
      </div>
      <br/>
      <br/>

      <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Topic</th>
      <th scope="col">GroupID</th>
      <th scope="col">Field</th>
    </tr>
  </thead>
  {this.state.topics.map((topics,index) =>(
  <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td><a href={`/topic/${topics._id}`} style={{textDecoration:'none'}}>
            {topics.topic}
            </a>
      </td>
      <td>{topics.groupid}</td>
      <td>{topics.field}</td>
    </tr>
  </tbody>
  ))}
</table>
</div>
</div>
    );
 }
}