import React from "react";
import { addPannelMember } from "../../../../services/adminService";

const PannelTable = ({ pannelMembers, groupid }) => {
  console.log(pannelMembers);
  handleOnAdd = async (memberId) => {
    try {
      await addPannelMember(groupid, memberId);
      window.location="/profile"
    } catch (error) {
      console.log(error);
    }
  };
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
        {pannelMembers.map((pannel) => (
          <tr key={pannel._id}>
            <td>{pannel.name}</td>
            <td>{pannel.email}</td>
            <td>{pannel.researchField}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleOnAdd(pannel._id)}
              >
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PannelTable;
