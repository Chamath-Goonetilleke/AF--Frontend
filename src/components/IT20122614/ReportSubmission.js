import React, { useState } from "react";
import axios from "axios";

export default function ReportSubmission() {
  const [file, setFile] = useState([]);
  const groupid = "SE3030_GRP_15";

  function sendData(e) {
    const formData = new FormData();
    var form = document.getElementById("form");
    formData.append("image", file);
    formData.append("groupid", groupid);
    e.preventDefault();

    axios
      .put("http://localhost:8081/api/students/report", formData)
      .then((res) => {
        console.log(res);
        alert("added");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div>
        <br />
        <br />
        <center>
          <h3>Submit Report</h3>
        </center>
      </div>
      <div
        style={{
          backgroundColor: "#f2efd9",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={sendData} encType="multipart/form-data" id="form">
          <div className="row">
            <label className="col-sm-2 col-form-label">Attachment</label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control form-control-sm"
                name="image"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <center>
            <button type="submit" className="btn btn-warning">
              Add submission
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
