import React, { Component, useRef } from "react";
import { marks } from "../../services/IT20192082/panelService";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: ["Group Name", "Marking Name", "Panel Member", "Total Marks"],
      marks: [],
    };
  }

  onSubmit = (e) => {
    marks()
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.setState({
            marks: res.data.existingMarks,
          });

          console.log(this.state.marks);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const doc = new jsPDF();

    const columns = ["Group Name", "Marking Name", "Total Marks"];
    let date = new Date();
    let Rows = [];
    this.state.marks.map((marks) => {
      const Mark = [marks.groupid, marks.markingname, marks.totalmarks];
      Rows.push(Mark);
    });
    doc.setFontSize(25);
    doc.text("Presentation Marks", 70, 18);
    doc.setFontSize(15);
    doc.text(`Date :${date}`, 10, 150);
    doc.autoTable(columns, Rows, { startY: 40 });

    doc.save("Marks Report.pdf");
  };

  componentDidMount() {
    this.retrieveMarks();
  }

  async retrieveMarks() {
    await marks()
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.setState({
            marks: res.data.existingMarks,
          });

          console.log(this.state.marks);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />

        <div className="container">
          <br />
          <br />

          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Group Name</th>
                <th scope="col">Marking Name</th>
                <th scope="col">Total Marks</th>
              </tr>
            </thead>
            {this.state.marks.map((marks, index) => (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{marks.groupid}</td>
                  <td>{marks.markingname}</td>
                  <td>{marks.totalmarks}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginBottom: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>&nbsp; Pdf
          </button>
        </div>
      </div>
    );
  }
}
