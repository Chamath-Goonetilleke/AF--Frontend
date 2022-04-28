import Joi  from "joi-browser";
import React, { Component } from "react";
import { loginWithJwt } from "../../services/authServices";
import { addUser } from "../../services/userServices";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      userRole: "",
      userId: "",
      researchField: "",
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
  // schema = {
  //   userRole: Joi.required().label("User Role"),
  //   userId: Joi.string().min(10).label("Student Id"),
  //   researchField: Joi.string().label("Research Field"),
  //   name: Joi.string().required().label("Name"),
  //   email: Joi.string().required().email().label("Email"),
  //   password: Joi.string().required().min(5).label("Password"),
  // };

  handleRFDisable() {
    const { userRole } = this.state.data;
    if (userRole === "Student" || userRole === "") return "null";
    return null;
  }
  handleSIDisable() {
    if (this.state.data.userRole !== "Student") return "null";
    return null;
  }
  handlePassword () {
    
  }
  doSubmit = async () => {
    const { data, errors } = this.state;
    const error ={cPassword:"Password dosent match"}
    if (data.password !== data.cPassword) return this.setState({errors:error});
    try {
      const {data:jwt } =await addUser(data);
      loginWithJwt(jwt)
      window.location="/profile"
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const { data, userRoleList, ResearchFied } = this.state;
    return (
      <div
        style={{
          border: " 3px solid #73AD21",
          height: "45rem",
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
          {this.renderInputField("Conform Password ", "cPassword", "password")}
          <br />
          {this.renderButton("Register", "btn btn-primary", "submit")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
