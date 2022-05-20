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
        <br />
        <div className="divTag">
          <h4>Submit Presentation</h4>
        </div>
        <br />
        <div style={{ marginLeft: "20px" }}>
          <ol>
            <li>
              <h6>Upload 1 ppt/pptx file</h6>
            </li>
            <li>
              <h6>File name should be {"<group-id>"}.ppt</h6>
            </li>

            <li>
              <h6>Limit to a maximum of 20 slides</h6>
            </li>

            <li>
              <h6>Include relevant Student ID(s) on each slide</h6>
            </li>
            <li>
              <h6>Plan the presentation for 10 minutes</h6>
            </li>
            <li>
              <h6>
                Submit Presentation{" "}
                <a className="btnProfile" href="/submit-presentation">
                  Click here
                </a>
              </h6>
            </li>
          </ol>
        </div>

        <br />
        <br />
        <div className="divTag">
          <h4>Submit Final Report</h4>
        </div>
        <br />
        <div style={{ marginLeft: "20px" }}>
          <ol>
            <li>
              <h6>Report must be in PDF format.</h6>
            </li>

            <li>
              <h6>
                Submit Report{" "}
                <a className="btnProfile" href="/submit-report">
                  Click here
                </a>
              </h6>
            </li>
          </ol>
        </div>

        <br />
        <br />
        <div className="divTag">
          <h4>Submit Proposal</h4>
        </div>
        <br />
        <div style={{ marginLeft: "20px" }}>
          <ol>
            <li>
              <h6>Proposal must be in PDF format.</h6>
            </li>

            <li>
              <h6>
                Submit Report{" "}
                <a className="btnProfile" href="/submit-proposal">
                  Click here
                </a>
              </h6>
            </li>
          </ol>
        </div>

        <br />
        <br />
        <div className="divTag">
          <h4>Submit Final Thesis</h4>
        </div>
        <br />
        <div style={{ marginLeft: "20px" }}>
          <ol>
            <li>
              <h6>Final Thesis must be in PDF format.</h6>
            </li>

            <li>
              <h6>
                Submit Report{" "}
                <a className="btnProfile" href="/submit-thesis">
                  Click here
                </a>
              </h6>
            </li>
          </ol>
        </div>

        <br />
        <br />
      </div>
      <br />
    </div>
  );
}
