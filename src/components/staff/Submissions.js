import React, { useEffect, useState } from "react";
import { getSubmissions } from "../../services/staffServices";

const DisplayLink = (props) => (
  <tr>
    <td>{props.record.field}</td>
    <td>
      <a
        className="btn btn-primary"
        href={`${props.record.file}`}
        target={"_blank"}
      >
        Download
      </a>
    </td>
  </tr>
);

export default function Submissions(props) {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = (await getSubmissions(props.id.toString())).data;

      setSubmissions(response);
    }

    getRecords();
  }, [submissions.size]);

  function displayFiles() {
    if (submissions.length === 0) {
      return (
        <tr>
          <td>Currently, you do not have any submissions</td>
        </tr>
      );
    }
    return submissions.map((record) => {
      return <DisplayLink record={record} key={record._id} />;
    });
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
        <tbody>{displayFiles()}</tbody>
      </table>
      <br />
    </div>
  );
}
