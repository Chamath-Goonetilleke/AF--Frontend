import React from "react";
import { addPannelMember } from "../../../../services/IT20122096/adminService";

import {toast } from "react-toastify";

const PannelTable = ({ pannelMembers, groupid }) => {
  console.log(pannelMembers);
  async function handleOnAdd(memberId) {
    try {
      await addPannelMember(groupid, memberId).then(() =>
        toast.success("Pannel Member Added",{autoClose:1000})
      );
      setTimeout(()=>{window.location = "/profile";},2000)
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default PannelTable;
