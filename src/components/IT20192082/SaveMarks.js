import React, { Component } from 'react'
import axios from 'axios';

export default class SaveMarks extends Component {

  constructor(props){
    super(props);
    this.state = {
      researchgroup:"",
      groupid:"",
      panelmember:"",
      markingname:"",
      totalmarks:""   
    }
  }

  handleInputChange = (e) => {
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }


  async componentDidMount(){

    const id = this.props.match.params.id;
  
    await axios.get(`http://localhost:8000/researchgroup/${id}`).then((res) => {
      if(res.data.success) {
        this.setState({
        researchgroup:res.data.researchgroup,
        groupid: res.data.researchgroup.groupid,
        panelmember: res.data.researchgroup.panelmember,
        });
        console.log(this.state.researchgroup);
      }
    });
  
  }

  
  onSubmit = (e) => {

    e.preventDefault();
    const {groupid,panelmember,totalmarks} = this.state;

    const data ={
        groupid:groupid,
        panelmember:panelmember,
        markingname:"Presentation Marking Scheme",
        totalmarks:totalmarks 
    }

    console.log(data)

    axios.post("http://localhost:8000/criterias/save",data).then((res) =>{
      
      if(res.data.success){
        alert("Marks Added")
        this.setState(
          {
            groupid:"",
            panelmember:"",
            markingname:"Presentation Marking Scheme",
            totalmarks:"" 
          }
        )
      }
    })

  }

  render() {

    const {groupid,panelmember} = this.state.researchgroup;

    return (
      <div>
      <br/>
      <form>
      <fieldset disabled>
        <div className="form-group">
      <label for="disabledTextInput">Group ID</label>
      <br/>
      <br/>
      <input type="text" id="disabledTextInput" class="form-control" placeholder={groupid} value={this.state.groupid}
      onChange={this.handleInputChange}></input>
    </div>
    <br/>
    <div className="form-group">
      <label for="disabledTextInput">Panel Member ID</label>
      <br/>
      <br/>
      <input type="text" id="disabledTextInput" class="form-control" placeholder={panelmember} value={this.state.panelmember}
      onChange={this.handleInputChange}></input>
    </div>
    <br/>
    <div className="form-group">
      <label for="disabledTextInput">Marking Name</label>
      <br/>
      <br/>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Presentation Marking Scheme" value="Presentation Marking Scheme"
      onChange={this.handleInputChange}></input>
    </div>
    <br/>
    </fieldset>
    
    <div className='need-validation' noValidate>
      <label style={{marginBottom: '15px'}}>Enter the Marks</label>
      <input type='text'
      className='form-control'
      name='marks'
      placeholder='Enter Marks'
      value={this.state.totalmarks}
      onChange={this.handleInputChange}/>
    </div>
      <br/>
    
    <button className='btn btn-success' type="submit" style={{marginBottom: '15px'}} onClick={this.onSubmit}>
      <i className='far fa-check-square'></i>&nbsp;Save Marks
    </button>

    </form>
    </div>
    )
  }
}


