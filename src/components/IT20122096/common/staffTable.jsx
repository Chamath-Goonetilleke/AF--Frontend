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
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.researchField}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;
