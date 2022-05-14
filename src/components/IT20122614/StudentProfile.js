import React from "react";

export default function StudentProfile() {
  return (
    <div className="container">
      <br />
      <center>
        <div>
          <h3>Welcome to the Research Project Module</h3>
        </div>
      </center>
      <br />
      <div
        style={{
          backgroundColor: "#f2efd9",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        
        <br />

        <div className="divTag">
          <h4>Group Registration</h4>
        </div>
        <br />
        <div style={{ marginLeft: "20px" }}>
          <ol>
            <li>
              <h6>
                Only the Group Leaders (or 1 nominee from each group) should
                create groups
              </h6>
            </li>
            <li>
              <h6>Add details of Team Members</h6>
            </li>
            <ul>
              <li>Add Student ID</li>
              <li>Add Student Name with Initials</li>
              <li>Add Student Email</li>
            </ul>
            <li>
              <h6>
                Create new Research Group{" "}
                <a className="btnProfile" href="/register-group">
                  Click here
                </a>
              </h6>
            </li>
          </ol>
        </div>
        <br />
        <div className="divTag">
          <h4>Request Supervisor/ Co-supervisor</h4>
        </div>
        <br />
        <br />
        <div style={{ marginLeft: "20px" }}>
          <button className="profilerequestBtn btn btn-success">
            <a
              style={{
                borderStyle: "none",
                textDecoration: "inherit",
                color: "white",
              }}
              href="/supervisor"
            >
              Request supervisor
            </a>
          </button>
          <br />
          <br />
          <button className="profilerequestBtn btn btn-success">
            <a
              style={{
                borderStyle: "none",
                textDecoration: "inherit",
                color: "white",
              }}
              href="/cosupervisor"
            >
              Request co-supervisor
            </a>
          </button>
        </div>
        <br />
        <div className="divTag">
          <h4>Topic Registration</h4>
        </div>
        <br />
        <div style={{ marginLeft: "20px" }}>
          <ol>
            <li>
              <h6>
                Only the Group Leaders (or 1 nominee from each group) should
                submit Topic
              </h6>
            </li>
            <li>
              <h6>Provide Documentation/Resource locations</h6>
            </li>
            <ul>
              <li>Official Documentation</li>
            </ul>
            <li>
              <h6>Lecturer would Approve/Reject the topic</h6>
            </li>
            <li>
              <h6>Upon Approval of the topic commence the research work</h6>
            </li>
            <li>
              <h6>
                Submit Research Topic{" "}
                <a className="btnProfile" href="/register-topic">
                  Click here
                </a>
              </h6>
            </li>
          </ol>
        </div>
        <br/>
        <div className="divTag">
          <h4>Submit Presentation</h4>
        </div>
        <br />
        <br />
      </div>
      <br />
    </div>
  );
}
