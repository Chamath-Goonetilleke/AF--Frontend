import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./services/IT20122096/authServices";
import NavBar from "./components/IT20122096/common/NavBar";
import LoginForm from "./components/IT20122096/loginForm";
import Profile from "./components/IT20122096/profile";
import RegisterForm from "./components/IT20122096/registerForm";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

import StaffResearchTopicRequests from "./components/IT20216078/staff/StaffResearchTopicRequests";
import AcceptedStaffResearchTopics from "./components/IT20216078/staff/StaffResearchAcceptedTopics";
import Chat from "./components/IT20216078/chat/Chat";
import Markings from "./components/IT20216078/staff/Markings";
import InsertMark from "./components/IT20216078/staff/InsertMark";

import StudentProfile from "./components/IT20122614/StudentProfile";
import RegisterTopic from "./components/IT20122614/RegisterTopic";
import RegisterGroup from "./components/IT20122614/RegisterGroup";
import RequestSupervisor from "./components/IT20122614/RequestSupervisor";
import RequestCoSupervisor from "./components/IT20122614/RequestCoSupervisor";
import ReportSubmission from "./components/IT20122614/ReportSubmission";
import ProposalSubmit from "./components/IT20122614/ProposalSubmit";
import FinalThesis from "./components/IT20122614/FinalThesis";
import SubmitPresentation from "./components/IT20122614/SubmitPresentation";

import TopicList from "./components/IT20192082/TopicList";
import TopicDetails from "./components/IT20192082/TopicDetails";
import TopicEdit from "./components/IT20192082/TopicEdit";
import ResearchgroupsList from "./components/IT20192082/ResearchgroupsList";
import PresentationList from "./components/IT20192082/PresentationList";
import Marks from "./components/IT20192082/Marks";
import SaveMarks from "./components/IT20192082/SaveMarks";
import Report from "./components/IT20192082/Report";

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
            {/* //////////////////////////// */}
            <Route
              path="/requests/:id"
              component={StaffResearchTopicRequests}
            />
            <Route
              path="/accepted/:id"
              component={AcceptedStaffResearchTopics}
            />
            <Route path="/chat/:id0/:id1" component={Chat} />
            <Route path="/markings/:id" component={Markings} />
            <Route path="/insertmark/:id0/:id1" component={InsertMark} />
            {/* //////////////////////////// */}
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
            {/* //////////////////////////// */}
            <Route path="/topic/:id" exact component={TopicDetails}></Route>
            <Route path="/edit/:id" exact component={TopicEdit}></Route>
            <Route
              path="/researchgroup/:id"
              exact
              component={PresentationList}
            ></Route>
            <Route path="/marks/:id" exact component={Marks}></Route>
            <Route path="/save/:id" exact component={SaveMarks}></Route>
            <Route path="/report" exact component={Report}></Route>
            {/* //////////////////////////// */}

            <Redirect from="/" to="/login" />
          </Switch>
        </React.Fragment>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
      </React.Fragment>
    );
  }
}

export default App;
