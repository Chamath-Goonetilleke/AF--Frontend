import React, { useState } from "react";
import { studentCaller, makeGroupOnly } from "../../services/StudentService";

export default function RegisterGroup() {
  let [name, setLeadername] = useState("");
  let [userId, setLeaderitnumber] = useState("");
  let [email, setEmail] = useState("");
  let [isLeader, setIsLeader] = useState(false);
  const [groupid, setGroups] = useState("");
  const [errors, setErrors] = useState("");
  const [count, setCount] = useState(1);
  var xerror = document.getElementById("snackbarError");

  async function sendGroupData(e) {
    e.preventDefault();

    const groupData = {
      groupid,
      userId,
      name,
      email,
      isLeader,
    };

    console.log(groupData);

    try {
      const value = await studentCaller(groupData);
      console.log(value.data.success);

      setCount(count + 1);
      setLeaderitnumber("");
      setLeadername("");
      setEmail("");
      setIsLeader(false);
      xerror.style.display = "none";

      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 1000);
      if (count === 4) {
        var btn = document.getElementById("formdisabled");
        btn.style.display = "none";
        var formTag = document.getElementById("gadded");
        formTag.style.display = "block";
      }
    } catch (err) {
      console.log("error=================");
      console.log(err.response.data.errors[0].msg);
      setErrors(err.response.data.errors[0].msg);

      xerror.style.display = "block";
    }
  }

  function createGroup(e) {
    e.preventDefault();
    const groupid = "SE3030_GRP_" + Math.floor(Math.random() * 100);
    //console.log(groupid);
    setGroups(groupid);
    //console.log(groupid + "ids");

    try {
      const createGroup1 = {
        groupid,
      };
      //console.log(createGroup1);
      const value = makeGroupOnly(createGroup1);

      console.log(value);
    } catch (err) {
      console.log(err);
    }

    var x = document.getElementById("myDIV");
    var create = document.getElementById("createDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
      create.style.display = "block";
    } else {
      x.style.display = "block";
      create.style.display = "none";
    }
  }

  return (
    <div>
      <br />
      <br />
      <div className="container cardBackgroudcolor">
        <div id="createDIV">
          <center>
            <button type="button" class="btn btn-success" onClick={createGroup}>
              Create Group
            </button>
          </center>
        </div>
        <div id="myDIV">
          <center>
            <h4>Group Number {groupid}</h4>
            <h3 className="primarycolor primaryfontfamily">
              Add Group Members
            </h3>
            <h3 className="primarycolor primaryfontfamily" id="gadded">
              Group members added
            </h3>
          </center>
          <form onSubmit={sendGroupData} id="formdisabled">
            <div class="form-row align-items-center"></div>
            <table width="90%">
              <tr className="formpadding">
                <td className="primaryfontfamily primarycolor">
                  Add member {count}
                </td>
                <td>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="formControlSm"
                      className="form-control form-control-sm"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setLeadername(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="formControlSm"
                      className="form-control form-control-sm"
                      placeholder="IT Number"
                      value={userId}
                      onChange={(e) => {
                        setLeaderitnumber(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="formControlSm"
                      className="form-control form-control-sm"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="form-outline">
                    <input
                      type="checkbox"
                      id="topping"
                      name="topping"
                      checked={isLeader}
                      onChange={() => {
                        setIsLeader(!isLeader);
                      }}
                    />
                    Leader{isLeader}
                  </div>
                </td>
              </tr>
            </table>
            <center>
              <button
                type="submit"
                id="sumbitBtn"
                class="noselect btn1 defaultmargin"
              ></button>
              <div id="snackbar">Group Member added</div>
              <div
                id="snackbarError"
                style={{ backgroundColor: "red", color: "white", "borderRadius": "20px" }}
              >
                {errors}
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
