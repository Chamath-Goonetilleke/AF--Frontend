import React from "react";

const StaffTable = ({ items, currentItem }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Research Field</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>
              <div style={{ padding: "5px" }}>{item.name}</div>
            </td>
            <td>
              <div style={{ padding: "5px" }}>{item.email}</div>
            </td>
            <td>
              <div style={{ padding: "5px" }}>{item.researchField}</div>
            </td>
            <td>
              <button
                style={{ padding: "5px" }}
                className="btn btn-warning btn-sm"
              >
                Update
              </button>
            </td>
            <td>
              <button
                style={{ padding: "5px" }}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;
