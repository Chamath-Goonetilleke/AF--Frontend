import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./services/authServices";
import NavBar from "./components/IT20122096/common/NavBar";
import LoginForm from "./components/IT20122096/loginForm";
import Profile from "./components/IT20122096/profile";
import RegisterForm from "./components/IT20122096/registerForm";

class App extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <React.Fragment>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default App;
