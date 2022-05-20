import React, { Component } from "react";
import { getAllCriterias } from "../../../../services/IT20122096/markingCriteria";
import MarkingSchemaModal from "./markingSchemaModal";


class MarkingSchema extends Component {
  state = { criterias: [] };

  async componentDidUpdate() {
    const { data: criterias } = await getAllCriterias(
      this.props.marking._id || "627fd62593fc1ca85ec4459f"
    );
    this.setState({ criterias });
  }
  getTotal() {
    let tot = 0;
    this.state.criterias.map((c) => (tot = tot + c.value));
    return tot;
  }
  generatePDF() {
    let document = new jsPDF();
    const Column = ["Criteria", "Marks"];
    const name = this.props.marking.name;
    const date = this.props.marking.date;
    console.log(name,date)
    let Rows = [];
    this.state.criterias.map((criteria) => {
      const Criteria = [criteria.name, criteria.value];
      Rows.push(Criteria);
    });
    document.text("Advertisements Summary Report", 60, 15);
    document.autoTable(Column, Rows, { startY: 30 });
    document.text(`Date :`, 14, 28);
    document.save(`Ad_Summary Report_1`);
  }
  render() {
    return (
      <div>
        <MarkingSchemaModal
          name={this.props.marking.name}
          date={this.props.marking.date}
          criterias={this.state.criterias}
          getTotal={this.getTotal()}
          onClose={this.props.onClose}
        />
      </div>
    );
  }
}

export default MarkingSchema;
