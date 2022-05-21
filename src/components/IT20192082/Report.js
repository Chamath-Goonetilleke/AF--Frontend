import React, {Component} from "react";
import jsPDF from 'jspdf'

export default class Report extends Component{

    //initialize the constructor
    constructor(props){
        super(props)

        this.state = {

        }
    }

    jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPDF('p', 'pt');

        //add some text to pdf document
        doc.text(20, 20, 'This is defualt text')

        //set the font of the pdf document
        doc.setFont('courier');

        //set the font type
        doc.setFontType('normal')

        doc.text(20, 30, 'This is text with courier font')

        //save the pdf document
        doc.save("generate.pdf")
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