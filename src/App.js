import "./App.css";
import StudentProfile from "./components/IT20122614/StudentProfile";
import RegisterTopic from "./components/IT20122614/RegisterTopic";
import RegisterGroup from "./components/IT20122614/RegisterGroup";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import RequestSupervisor from "./components/IT20122614/RequestSupervisor";
import RequestCoSupervisor from "./components/IT20122614/RequestCoSupervisor";

function App() {
  return ( 
    <div>
      <Routes>
        <StudentProfile />
        <Route path="/register-topic" exact component={RegisterTopic} />
        <Route path="/register-group" exact component={RegisterGroup} />
        <Route path="/supervisor" exact component={RequestSupervisor} />
        <Route path="/cosupervisor" exact component={RequestCoSupervisor} />
      </Routes>
    </div>
   );
}

export default App;