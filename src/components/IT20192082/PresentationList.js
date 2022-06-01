import React, { Component } from 'react';
import { getResearchGroup } from "../../services/IT20192082/panelService"; 

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
        <div className='container'>

<br/>
<br/>

        
        <ul className="list-group w-75">
        <li className="list-group-item active"><h2>{groupid}</h2></li>
        <li className="list-group-item">Download Presentation : <a href={presentation}>
        <button type="button" className="btn btn-warning"> Download</button>
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