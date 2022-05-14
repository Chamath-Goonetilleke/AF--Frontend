import { Route, Routes } from "react-router-dom";
import AcceptedStaffResearchTopics from "./components/staff/StaffResearchAcceptedTopics";
import StaffResearchTopicRequests from "./components/staff/StaffResearchTopicRequests";
import Chat from "./components/chat/Chat";
import Markings from "./components/staff/Markings";
import InsertMark from "./components/staff/InsertMark";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/requests/:id" element={<StaffResearchTopicRequests />} />
        <Route path="/accepted/:id" element={<AcceptedStaffResearchTopics />} />
        <Route path="/chat/:id0/:id1" element={<Chat />} />
        <Route path="/markings/:id" element={<Markings />} />
        <Route path="/insertmark/:id0/:id1" element={<InsertMark />} />
      </Routes>
    </div>
  );
}

export default App;
