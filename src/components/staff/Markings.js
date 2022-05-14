import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CriteriaList from "./CriteriaList";
import Submissions from "./Submissions";

import config from "../../config.json";

import "./Styles.css";

const MarkingRubric = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>
      <CriteriaList id={props.record._id} />
    </td>
    <td>
      <Link
        className="btn btn-primary"
        to={`/insertmark/${props.record.name}/${props.groupid}`}
      >
        Submit Mark
      </Link>{" "}
    </td>
  </tr>
);

export default function Markings() {
  const params = useParams();

  const [markingRubrics, setMarkingRubrics] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`${config.API}/staff/markings`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setMarkingRubrics(records);
    }

    getRecords();
  }, [markingRubrics.length]);

  function markingRubricList() {
    if (markingRubrics.length === 0) {
      return (
        <div>
          <h6>Marking Rubrics not found. Please contact admininstrator</h6>
        </div>
      );
    }
    return markingRubrics.map((record) => {
      return (
        <MarkingRubric
          record={record}
          groupid={params.id.toString()}
          key={record._id}
        />
      );
    });
  }

  return (
    <div className="body">
      <h3>Submissions</h3>
      <Submissions id={params.id.toString()} />
      <h3>Marking Rubricks and Criterias</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Marking Rubrick</th>
            <th>Marking Criteria</th>
          </tr>
        </thead>
        <tbody>{markingRubricList()}</tbody>
      </table>
    </div>
  );
}
