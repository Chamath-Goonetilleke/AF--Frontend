import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import TopicList from './components/IT20192082/TopicList'
import TopicDetails from './components/IT20192082/TopicDetails'
import TopicEdit from './components/IT20192082/TopicEdit'
import Navbar from './components/IT20192082/Navbar'
import ResearchgroupsList from './components/IT20192082/ResearchgroupsList'
import PresentationList from './components/IT20192082/PresentationList'
import Marks from './components/IT20192082/Marks'
import SaveMarks from './components/IT20192082/SaveMarks'
import Report from './components/IT20192082/Report'

export default class App extends Component {
  render() {
    return (
  
      
      <BrowserRouter>
        <div  className="container"> 
        <Navbar/>
        <Route path='/' exact component={TopicList}></Route>
        <Route path='/topic/:id' exact component={TopicDetails}></Route>
        <Route path='/edit/:id' exact component={TopicEdit}></Route>
        <Route path='/researchgroups' exact component={ResearchgroupsList}></Route>
        <Route path='/researchgroup/:id' exact component={PresentationList}></Route>
        <Route path='/marks/:id' exact component={Marks}></Route>
        <Route path='/save/:id' exact component={SaveMarks}></Route>
        <Route path='/report' exact component={Report}></Route>
        </div>
      </BrowserRouter>

      
    )
  }
}