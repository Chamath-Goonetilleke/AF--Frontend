import Joi from "joi-browser";
import React, { Component } from "react";
import { loginWithJwt } from "../../services/IT20122096/authServices";
import { addUser } from "../../services/IT20122096/userServices";
import Form from "./common/form";
import { ToastContainer, toast } from "react-toastify";

class RegisterForm extends Form {
  state = {
    data: {
      userRole: "",
      userId: "it20122096",
      researchField: "c",
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    errors: {},
    userRoleList: [
      "",
      "Student",
      "Supervisor",
      "Co-Supervisor",
      "Pannel Member",
    ],
    ResearchFied: [
      "",
      "Cloud Computing",
      "Cybersecurity",
      "Cyber-Physical Systems",
      "Databases and Data Mining",
      "Data Science and Analytics",
      "Multimedia Systems and Apps",
      "Semantic, Social and Sensor Web",
      "Machine Learning and Artificial Intelligence",
      "Wireless Networking and Security",
    ],
  };
  schema = {
    userRole: Joi.required().label("User Role"),
    userId: Joi.string().min(1).label("Student Id"),
    researchField: Joi.string().label("Research Field"),
    name: Joi.string().min(5).required().label("Name"),
    email: Joi.string().min(5).required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    cPassword: Joi.string().required().min(5).label("Conform Password"),
  };

  handleRFDisable() {
    const { userRole } = this.state.data;
    if (userRole === "Student" || userRole === "") return "null";
    return null;
  }
  handleSIDisable() {
    if (this.state.data.userRole !== "Student") return "null";
    return null;
  }
  doSubmit = async () => {
    const { data } = this.state;
    const error = { cPassword: "Password dosent match" };
    if (data.password !== data.cPassword) {
      toast.error(error.cPassword, { theme: "dark" });
      return this.setState({ errors: error });
    }

    const { data: jwt } = await addUser(data)
      .then(() => {
        toast.success("Registerd in Successfully", { autoClose: 1000 });
        setTimeout(() => {
          loginWithJwt(jwt);
          window.location = "/profile";
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  render() {
    const { data, userRoleList, ResearchFied, errors } = this.state;
    console.log(errors);
    return (
      <React.Fragment>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div
          style={{
            border:
              Object.keys(errors).length !== 0
                ? " 3px solid red"
                : " 3px solid #73AD21",

            width: "50%",
            padding: "5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            margin: "5rem",
            marginLeft: "20rem",
          }}
        >
          <center>
            <h2>Create an Account</h2>
            <br />
          </center>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label className="form-label">Register as</label>
              <select
                className="form-select"
                name="userRole"
                onChange={this.handleChange}
              >
                {userRoleList.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                disabled={this.handleSIDisable()}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="form-label">Research Feild</label>
              <select
                className="form-select"
                name="researchField"
                disabled={this.handleRFDisable()}
                onChange={this.handleChange}
              >
                {ResearchFied.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            {this.renderInputField("Full Name ", "name", "text")}
            {this.renderInputField("Email ", "email", "text")}
            {this.renderInputField("Password ", "password", "password")}
            {this.renderInputField(
              "Conform Password ",
              "cPassword",
              "password"
            )}
            <br />
            {this.renderButton("Register", "btn btn-primary", "submit")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
