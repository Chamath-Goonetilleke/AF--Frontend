import React from 'react'
import jsPDF from "jspdf";
import "jspdf-autotable";

const MarkingSchemaModal = ({ name, date, criterias, getTotal }) => {
  function getDate(postdate) {
    let date = new Date(postdate);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let postDate = date.getFullYear() + "-" + month + "-" + day;
    return postDate;
  }
  generatePDF = () => {
    let document = new jsPDF();
    const Column = ["Criteria", "Marks"];

    console.log(name, date);
    let Rows = [];
    criterias.map((criteria) => {
      const Criteria = [criteria.name, criteria.value];
      Rows.push(Criteria);
    });
    Rows.push(["Total", getTotal]);
    document.text(name, 60, 15);
    document.autoTable(Column, Rows, { startY: 40 });
    document.text(`Date :${getDate(date)}`, 150, 38);
    document.save(name);
  };
  return (
    <div
      className="modal fade"
      id="markingGen"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: "40rem" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              <span>{name}</span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {criterias.map((criteria) => (
              <div key={criteria._id}>
                <div
                  className="row"
                  style={{
                    marginBottom: "1rem",
                    width: "39rem",
                    borderTop: "solid black 1px",
                  }}
                >
                  <div className="col">{criteria.name}</div>
                  <div
                    className="col"
                    style={{
                      marginRight: "-25rem",
                      marginLeft: "5rem",
                    }}
                  >
                    {criteria.value}
                  </div>
                </div>
              </div>
            ))}
            <div
              className="row"
              style={{
                marginBottom: "1rem",
                width: "39rem",
                borderTop: "solid black",
              }}
            >
              <div className="col" style={{ fontWeight: "bold" }}>
                Total
              </div>
              <div
                className="col"
                style={{
                  fontWeight: "bold",
                  marginRight: "-24rem",
                  marginLeft: "5rem",
                }}
              >
                {getTotal}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => generatePDF()}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};;
 
export default MarkingSchemaModal;      