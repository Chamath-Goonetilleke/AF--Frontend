import React, { useEffect, useState } from "react";
import { getCriteriaList } from "../../services/staffServices";

const MarkingCriteria = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.value}</td>
  </tr>
);

export default function CriteriaList(props) {
  const [markingCriterias, setMarkingCriterias] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = (await getCriteriaList(props.id.toString())).data;

      setMarkingCriterias(response);
    }

    getRecords();
  }, [markingCriterias.length]);

  function markingCriteriaList() {
    if (markingCriterias.length === 0) {
      return (
        <tr>
          <td>Marking criterias not found. Please contact administrator</td>
        </tr>
      );
    }
    return markingCriterias.map((record) => {
      return <MarkingCriteria record={record} key={record._id} />;
    });
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Marks Allocated</th>
          </tr>
        </thead>
        <tbody>{markingCriteriaList()}</tbody>
      </table>
    </div>
  );
}
