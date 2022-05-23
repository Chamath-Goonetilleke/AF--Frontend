import React from 'react'
import Button from "@mui/material/Button";

const Markings = (props) => {
  const { markings, getDate, onView } = props;
  return (
    <div className="container" style={{ marginTop: "2rem", width: "60rem" }}>
      <div className="row" style={{ marginBottom: "1rem" }}>
        <div className="col" style={{ fontWeight: "bold" }}>
          Marking Name
        </div>
        <div className="col" style={{ fontWeight: "bold" }}>
          Created Date
        </div>
        <div className="col" style={{ fontWeight: "bold" }}></div>
      </div>
      {markings.map((marking) => (
        <div
          key={marking._id}
          className="row"
          style={{
            marginBottom: "1rem",
            borderBottom: "solid black 1px",
            paddingBottom: "1rem",
          }}
        >
          <div className="col">{marking.name}</div>
          <div className="col">{getDate(marking.date)}</div>
          <div className="col">
            <Button
              variant='contained'
              color='success'
              data-bs-toggle="modal"
              data-bs-target="#markingGen"
              onClick={() => onView(marking._id)}
            >
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Markings;