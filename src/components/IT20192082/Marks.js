import React, { Component } from 'react'
import {criteriass} from "../../services/IT20192082/panelService" 

export default class Marks extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      criterias:[]
    };
  }

  componentDidMount(){
    this.retrieveCriterias();
  }
  
  retrieveCriterias(){
    criteriass().then(res =>{
  
      console.log(res.data);
      if(res.data.success){
        this.setState({
          criterias:res.data.existingCriterias
        });
  
        console.log(this.state.criterias)
      }
    })
  }
    render() {

      const id = this.props.match.params.id;
      
      return (
        <div>
      <div className='container'>
      <p>Marks Criteria</p>
      <table className="table">
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Value</th>
          </tr>
        </thead>
        <tbody>
        {this.state.criterias.map((criterias,index) =>(
          <tr key={index}>
            <th scope='row'>{index+1}</th>
            <td>
            <a href={`/criteria/${criterias._id}`} style={{textDecoration:'none'}}>
            {criterias.name}
            </a>
            </td>
            <td>{criterias.value}</td>   
          </tr>      
        ))}
        <br/>
        <br/>
        
      </tbody>
      </table>
      </div>
      <div>
      <a href={`/save/${id}`}>
        <button type="button" className="btn btn-success">Assign Full Marks for Group</button>
        </a>
      </div>
      </div>
      )
   }
  }