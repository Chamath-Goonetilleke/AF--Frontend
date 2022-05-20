import React from "react";
import { addPannelMember } from "../../../../services/IT20122096/adminService";

import { ToastContainer, toast } from "react-toastify";

const PannelTable = ({ pannelMembers, groupid }) => {
  console.log(pannelMembers);
  handleOnAdd = async (memberId) => {
    try {
      await addPannelMember(groupid, memberId).then(() =>
        toast.success("Pannel Member Added")
      );
      setTimeout(()=>{window.location = "/profile";},3000)
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
