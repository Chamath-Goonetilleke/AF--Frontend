import React, { useEffect, useState } from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/IT20122096/common/NavBar';
import LoginForm from './components/IT20122096/loginForm';
import Profile from './components/IT20122096/profile';
import RegisterForm from './components/IT20122096/registerForm';
import { getCurrentUser } from './services/authServices';

function App() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    function getUser() {
      const user = getCurrentUser();
      setUser(user)
    }
    getUser();
  })

  return (
    <React.Fragment>
      <NavBar user={user} />
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

export default App;
