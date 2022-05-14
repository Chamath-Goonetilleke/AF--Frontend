<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import StudentProfile from "./components/IT20122614/StudentProfile";
import RegisterTopic from "./components/IT20122614/RegisterTopic";
import RegisterGroup from "./components/IT20122614/RegisterGroup";
import RequestSupervisor from "./components/IT20122614/RequestSupervisor";
import RequestCoSupervisor from "./components/IT20122614/RequestCoSupervisor";
import "./App.css";

function App() {
  return (
=======
import "./App.css";
import StudentProfile from "./components/IT20122614/StudentProfile";
import RegisterTopic from "./components/IT20122614/RegisterTopic";
import RegisterGroup from "./components/IT20122614/RegisterGroup";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import RequestSupervisor from "./components/IT20122614/RequestSupervisor";
import RequestCoSupervisor from "./components/IT20122614/RequestCoSupervisor";

function App() {
  return ( 
>>>>>>> c6e851cc29cef0500b3ab6c23138a64cb685e6fe
    <div>
      <Routes>
        <StudentProfile />
        <Route path="/register-topic" exact component={RegisterTopic} />
        <Route path="/register-group" exact component={RegisterGroup} />
        <Route path="/supervisor" exact component={RequestSupervisor} />
        <Route path="/cosupervisor" exact component={RequestCoSupervisor} />
      </Routes>
    </div>
<<<<<<< HEAD
  );
}

export default App;
=======
   );
}

export default App;
>>>>>>> c6e851cc29cef0500b3ab6c23138a64cb685e6fe
