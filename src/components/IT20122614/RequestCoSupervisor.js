import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import axios from "axios";
 import { requestTopicSepervisor } from "../../services/StudentService";


export default function RequestSupervisor() {
  const [goSteps, setGoSteps] = useState(0);
  const [supervisor, setSelectSupervisor] = useState("");
  const [supervisors, setSupervisors] = useState([]);
  const [supervisorname, setSelectSupervisorname] = useState("");
  const [supervisorid, setSelectSupervisorid] = useState("");
  const [supervisorField, setSupervisorField] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setmessage] = useState("");
  const userRole = "Co-Supervisor";

  function getData(e) {
    e.preventDefault();

    if (supervisor === "" || supervisor == null) {
      console.log("Please enter value");
    } else {
      axios
        .get("http://localhost:8081/api/students/getsupervisor", {
          params: { field: supervisor,userRole: userRole },
        })
        .then((res) => {
          console.log(res.data);
          setSupervisors(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function requestTopic(e) {
    e.preventDefault();

    const topicObj = {
      supervisorid,
      supervisorname,
      supervisorField,
      topic,
      message,
      userRole,
    };

    try {
      const value = requestTopicSepervisor(topicObj);
      console.log(value);
    } catch (err) {
      console.log(err);
    }

    console.log(topicObj);
    setGoSteps(2);
  }

  return (
    <div className="container cardBackgroudcolor">
      <br/><br/>
      {/* <center>
        <h1>Select Superviser</h1>
      </center> */}

      <div className="insideCard">
        {goSteps === 0 && (
          <center>
            <h5>Select Co-Supervisor</h5>
            <div>
              <div className="container">
                <form
                  className="row"
                  onSubmit={getData}
                  style={{ marginBottom: "30px" }}
                >
                  <div className="col-auto" style={{ marginLeft: "40px" }}>
                    <label
                      style={{ paddingRight: "30px", paddingBottom: "10px" }}
                    >
                      Select Research Field
                    </label>
                  </div>
                  <div className="col-auto">
                    <select
                      name="supervisor"
                      className="form-select form-select-sm selectWidth"
                      onChange={(e) => {
                        setSelectSupervisor(e.target.value);
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
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary btn-sm">
                      View
                    </button>
                  </div>
                </form>
              </div>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "white",
                  marginLeft: "40px",
                  marginRight: "40px",
                }}
              >
                <table>
                  {supervisors.map(function (supervisor, key) {
                    return (
                      <tr key={key}>
                        <td>{supervisor.id}</td>
                        <td>{supervisor.name}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => (
                              setGoSteps(1),
                              setSelectSupervisorname(supervisor.name),
                              setSelectSupervisorid(supervisor.id),
                              setSupervisorField(supervisor.researchField)
                            )}
                            type="submit"
                          >
                            Select
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>

              {/* <button
                className="btn btn-primary btn-sm"
                onClick={() => setGoSteps(1)}
                type="submit"
              >
                Next
              </button> */}
            </div>
          </center>
        )}
        {goSteps === 1 && (
          <center>
            <div>
              <div>
                <h5>Request Superviser</h5>
                <div className="container">
                  <form onSubmit={requestTopic} className="row">
                    <table width="90%">
                      <tr className="formpadding">
                        <td className="primaryfontfamily primarycolor">
                          Supervisor
                        </td>
                        <td>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="formControlS"
                              className="form-control form-control-sm"
                              value={supervisorname}
                              name="supername"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="formpadding">
                        <td className="primaryfontfamily primarycolor">
                          Research Field
                        </td>
                        <td>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="formControlS"
                              className="form-control form-control-sm"
                              value={supervisorField}
                              name="supername"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="formpadding">
                        <td className="primaryfontfamily primarycolor">
                          Research Topic
                        </td>
                        <td>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="formControlS"
                              className="form-control form-control-sm"
                              name="topic"
                              onChange={(e) => {
                                setTopic(e.target.value);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="formpadding">
                        <td className="primaryfontfamily primarycolor">
                          Message
                        </td>
                        <td>
                          <div className="form-outline">
                            <textarea
                              className="form-control form-control-sm"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              onChange={(e) => {
                                setmessage(e.target.value);
                              }}
                            ></textarea>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </center>
        )}
      </div>
      <Stepper activeStep={goSteps}>
        <Step
          className="stepperstylings"
          onClick={() => setGoSteps(0)}
          label="Select"
        />
        <hr />
        <Step
          className="stepperstylings"
          onClick={() => setGoSteps(1)}
          label="Request"
        />
      </Stepper>
    </div>
  );
}
