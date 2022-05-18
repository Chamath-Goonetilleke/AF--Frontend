import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import StudentProfile from "./components/IT20122614/StudentProfile";
import RegisterTopic from "./components/IT20122614/RegisterTopic";
import RegisterGroup from "./components/IT20122614/RegisterGroup";
import RequestSupervisor from "./components/IT20122614/RequestSupervisor";
import RequestCoSupervisor from "./components/IT20122614/RequestCoSupervisor";

import "./App.css";
import SubmitPresentation from "./components/IT20122614/SubmitPresentation";
import ReportSubmission from "./components/IT20122614/ReportSubmission";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" exact component={StudentProfile} />
        <Route path="/register-topic" exact component={RegisterTopic} />
        <Route path="/register-group" exact component={RegisterGroup} />
        <Route path="/supervisor" exact component={RequestSupervisor} />
        <Route path="/cosupervisor" exact component={RequestCoSupervisor} />
        <Route path="/submit-presentation" exact component={SubmitPresentation} />
        <Route path="/submit-report" exact component={ReportSubmission} />
      </Routes>
    </div>
  );
}

export default App;
