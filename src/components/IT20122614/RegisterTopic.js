import React, { useState } from "react";
import axios from "axios";
import { registerTopicCallery } from "../../services/StudentService";

export default function RegisterTopic() {
  const [topic, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState([]);
  const [field, setField] = useState("");
  const groupid = "SE3030_GRP_" + Math.floor(Math.random() * 100);

  function sendData(e) {
    const formData = new FormData();
    var form = document.getElementById("form");

    formData.append("groupid", groupid);
    formData.append("subject", topic);
    formData.append("message", message);
    formData.append("image", file);
    formData.append("field", field);
    console.log(formData);

    e.preventDefault();

    // const regTopic = {
    //   groupid,
    //   topic,
    //   file,
    // };

    // axios
    //   .post("http://localhost:8081/api/students/uploads", formData)
    //   .then(() => {
    //     alert("Topic added successfully");
    //     setSubject("");
    //     setMessage("");
    //     setFile("");
    //     setField("");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      const response = registerTopicCallery(formData);
      console.log(response);
      setSubject("");
      setMessage("");
      setFile("");
      setField("");
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <br />
      <br />
      <div className="container cardBackgroudcolor">
        <center>
          <h3 className="primarycolor primaryfontfamily">Topic Registration</h3>
        </center>
        <div>
          <form onSubmit={sendData} encType="multipart/form-data" id="form">
            <div className="form-group row setingmargin">
              <label className="col-sm-2 col-form-label">Topic</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Subject"
                  name="subject"
                  required
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="form-group row setingmargin">
              <label className="col-sm-2 col-form-label">Message</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control form-control-sm"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <br />
            <div className="form-group row setingmargin">
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
            <br />
            <div className="form-group row setingmargin">
              <label className="col-sm-2 col-form-label">Research Field</label>
              <div className="col-sm-10">
                <select
                  name="supervisor"
                  className="form-select form-select-sm"
                  onChange={(e) => {
                    setField(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Choose a Field
                  </option>
                  <option value="Cloud Computing" className="">
                    Cloud Computing
                  </option>
                  <option value="Cybersecurity" className="">
                    Cybersecurity
                  </option>
                  <option value="Cyber-Physical Systems" className="">
                    Cyber-Physical Systems
                  </option>
                  <option value="Databases and Data Mining">
                    Databases and Data Mining
                  </option>
                  <option value="Data Science and Analytics">
                    Data Science and Analytics
                  </option>
                  <option value="Multimedia Systems and Apps">
                    Multimedia Systems and Apps
                  </option>
                  <option value="Semantic, Social and Sensor Web">
                    Semantic, Social and Sensor Web
                  </option>
                  <option value="Machine Learning and Artificial Intelligence">
                    Machine Learning and Artificial Intelligence
                  </option>
                  <option value="Wireless Networking and Security">
                    Wireless Networking and Security
                  </option>
                </select>
              </div>
            </div>
            <center>
              <button
                type="submit"
                className="noselect btn1 defaultmargin"
              ></button>
              <div id="snackbar">Topic Registered</div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
