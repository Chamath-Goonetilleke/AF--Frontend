import React, { useEffect, useState } from "react";
import { getSubmissions } from "../../services/staffServices";

export default function Submissions(props) {
  const [submission, setSubmissions] = useState({});

  useEffect(() => {
    async function getRecords() {
      const response = (await getSubmissions(props.id.toString())).data;

      setSubmissions(response);
    }

    getRecords();
  }, [props.id.toString()]);

  function displayProposal() {
    if (submission !== null && submission.proposal !== undefined) {
      return (
        <tr>
          <td>Propsal Document</td>
          <td>
            <a
              className="btn btn-primary"
              href={`${submission.proposal}`}
              target={"_blank"}
            >
              Download
            </a>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>Proposal Document</td>
          <td>Proposal Document still not submitted</td>
        </tr>
      );
    }
  }

  function displayReport() {
    if (submission !== null && submission.report !== undefined) {
      return (
        <tr>
          <td>Report</td>
          <td>
            <a
              className="btn btn-primary"
              href={`${submission.report}`}
              target={"_blank"}
            >
              Download
            </a>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>Report</td>
          <td>Report still not submitted</td>
        </tr>
      );
    }
  }

  function displayFinalThesis() {
    if (submission !== null && submission.Finalthesis !== undefined) {
      return (
        <tr>
          <td>Final Thesis</td>
          <td>
            <a
              className="btn btn-primary"
              href={`${submission.Finalthesis}`}
              target={"_blank"}
            >
              Download
            </a>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>Final Thesis</td>
          <td>Final Thesis still not submitted</td>
        </tr>
      );
    }
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Submission Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayProposal()}
          {displayReport()}
          {displayFinalThesis()}
        </tbody>
      </table>
      <br />
    </div>
  );
}
