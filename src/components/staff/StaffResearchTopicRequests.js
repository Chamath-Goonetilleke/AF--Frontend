import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  acceptTopicRequest,
  declineTopicRequest,
  topicRequests,
} from "../../services/staffServices";

import "./Styles.css";

const ResearchTopicRequest = (props) => (
  <tr>
    <td>{props.record.field}</td>
    <td>{props.record.topic}</td>
    <td>{props.record.message}</td>
    <td>{props.record.groupid}</td>
    <td>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          props.acceptRecord(props.record._id);
        }}
      >
        Accept
      </button>{" "}
      |{" "}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          props.declineRecord(props.record._id);
        }}
      >
        Decline
      </button>
    </td>
  </tr>
);

export default function StaffResearchTopicRequests() {
  const params = useParams();

  const [researchTopicRequests, setresearchTopicRequests] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = (await topicRequests(params.id.toString())).data;

      setresearchTopicRequests(response);
    }

    getRecords();
  }, [researchTopicRequests.length]);

  async function acceptResearchTopicRequest(id) {
    await acceptTopicRequest(id);

    const newRecords = researchTopicRequests.filter((el) => el._id !== id);
    setresearchTopicRequests(newRecords);
  }

  async function declineResearchTopicRequest(id) {
    await declineTopicRequest(id);

    const newRecords = researchTopicRequests.filter((el) => el._id !== id);
    setresearchTopicRequests(newRecords);
  }

  function researchTopicRequestsList() {
    if (researchTopicRequests.length === 0) {
      return (
        <tr>
          <td>Currently, you do not have any research topics requests</td>
        </tr>
      );
    }
    return researchTopicRequests.map((record) => {
      return (
        <ResearchTopicRequest
          record={record}
          acceptRecord={() => acceptResearchTopicRequest(record._id)}
          declineRecord={() => declineResearchTopicRequest(record._id)}
          key={record._id}
        />
      );
    });
  }

  return (
    <div className="body">
      <h5>Research Topic Requests</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Field</th>
            <th>Topic</th>
            <th>Message</th>
            <th>Group ID</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>{researchTopicRequestsList()}</tbody>
      </table>
    </div>
  );
}
