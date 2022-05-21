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
import ProposalSubmit from "./components/IT20122614/ProposalSubmit";
import FinalThesis from "./components/IT20122614/FinalThesis";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/student-profile" exact component={StudentProfile} />
        <Route path="/register-topic" exact component={RegisterTopic} />
        <Route path="/register-group" exact component={RegisterGroup} />
        <Route path="/supervisor" exact component={RequestSupervisor} />
        <Route path="/cosupervisor" exact component={RequestCoSupervisor} />
        <Route
          path="/submit-presentation"
          exact
          component={SubmitPresentation}
        />
        <Route path="/submit-report" exact component={ReportSubmission} />
        <Route path="/submit-proposal" exact component={ProposalSubmit} />
        <Route path="/submit-thesis" exact component={FinalThesis} />
      </Routes>
    </div>
  );
}

export default App;
