import React, {Component} from "react";
import {jsPDF} from 'jspdf'
import {generateReport} from "../../services/panelService"
import 'jspdf-autotable'


export default class Report extends Component{

    constructor(props){
        super(props);
      
        this.state = {
          marks:[]
        };
      }
      
      componentDidMount(){
        this.retrieveReports();
      }
      
      async retrieveReports(){
        await generateReport().then(res =>{
      
          console.log(res.data);
          if(res.data.success){
            this.setState({
              marks:res.data.existingMarks
            });
      
            console.log(this.state.marks)
          }
        })
        .catch((err)=>{
          console.log(err);
        }) 
      }

    jsPdfGenerator = () => {


        <div className='container'>
    <p>Students Marks</p>
    <table className="table">
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>GroupID</th>
          <th scope='col'>Panel Member</th>
          <th scope='col'>Marking Name</th> 
          <th scope='col'>Total Marks</th> 
        </tr>
      </thead>
      <tbody>
      {this.state.marks.map((marks,index) =>(
        <tr key={index}>
          <th scope='row'>{index+1}</th>
          <td>{marks.groupid}</td>
          <td>{marks.panelmember}</td>
          <td>{marks.markingname}</td>  
          <td>{marks.totalmarks}</td>  
        </tr>      
      ))}
      
    </tbody>
    </table>
    </div>





const doc = new jsPDF()

// It can parse html:
// <table id="my-table"><!-- ... --></table>
doc.autoTable({ html: '#my-table' })

// Or use javascript directly:
doc.autoTable({
    
  head: [['#', 'GroupID', 'Panel Member','Marking Name','Total Marks' ]],
  body: [
    ['David', 'david@example.com', 'Sweden'],
    // ...
  ],
})

doc.save('table.pdf')
    }

    render() {
        return(

            
        <div>
        <button className='btn btn-success' type="submit" style={{marginBottom: '15px'}} onClick={this.jsPdfGenerator}>
         <i className='far fa-check-square'></i>&nbsp; Generate Report
        </button>
            
        </div>
        )
    }
}