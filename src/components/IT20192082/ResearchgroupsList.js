import React, { Component } from 'react';
import axios from 'axios';

export default class ResearchgroupsList extends Component {
constructor(props){
  super(props);

  this.state = {
    researchgroups:[]
  };
}

componentDidMount(){
  this.retrieveResearchgroups();
}

async retrieveResearchgroups(){
  await axios.get("http://localhost:8000/researchgroups").then(res =>{

    console.log(res.data);
    if(res.data.success){
      this.setState({
        researchgroups:res.data.existingResearchgroups
      });

      console.log(this.state.researchgroups)
    }
  })
}

 filterData(researchgroups,searchKey){
   const result = researchgroups.filter((researchgroup) => 
     researchgroup.groupid.toLowerCase().includes(searchKey) ||researchgroup.panelmember.toLowerCase().includes(searchKey)
  )
  this.setState({ researchgroups: result })
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/researchgroups").then(res =>{

    if(res.data.success){
        this.filterData(res.data.existingResearchgroups,searchKey)
      
    }
  });
}


  render() {

    return (
    <div className='container'>
    <div className='row'>
      <div className='col-lg-9 mt-2 mb-2'>
        <h4>All Researchgroups</h4>
      </div>
      <div className='col-lg-3 mt-2 mb-2'>
        <input
        className='form-control'
        type='search'
        placeholder='Search'
        name='searchQuery'
        onChange={this.handleSearchArea}>

        </input>
      </div>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>GroupID</th>
          <th scope='col'>Panelmember</th>
          <th scope='col'>cosupercisorid</th>
          <th scope='col'>SupercisorID</th>
          
          
 
        </tr>
      </thead>
      <tbody>
      {this.state.researchgroups.map((researchgroups,index) =>(
        <tr key={index}>
          <th scope='row'>{index+1}</th>
          <td>
          <a href={`/researchgroup/${researchgroups._id}`} style={{textDecoration:'none'}}>
          {researchgroups.groupid}
          
          </a>
          </td>
          <td>{researchgroups.panelmember}</td>
          <td>{researchgroups.cosupercisorid}</td>  
          <td>{researchgroups.supercisorid}</td>  

        </tr>      
      ))}
      
    </tbody>
    </table>
    </div>

    );
 };

}

