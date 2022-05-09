import React from "react";
import { loginUser } from "../../services/authServices";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  doSubmit = async () => {
    try {
      await loginUser(this.state.data);
      window.location = "/profile";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("invalid email pass");
      }
    }
  };

  render() {
    return (
      <div
        style={{
          border: " 3px solid #73AD21",
          height: "25rem",
          width: "40%",
          padding: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          margin: "5rem",
          marginLeft: "25rem",
        }}
      >
        <center>
          <h2>Login </h2>
        </center>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("Email", "email", "text")}
          {this.renderInputField("Password", "password", "text")}
          <br />
          <center>{this.renderButton("Submit", "btn btn-primary")}</center>
        </form>
      </div>
    );
  }
}

export default LoginForm;
