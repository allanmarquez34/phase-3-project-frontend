import React from "react"
import ActivitiesList from "./components/ActivitiesList"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateActivity from "./components/CreateActivity"
// import ActivityPage from "./components/ActivityPage"
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import './App.css'

function App() {
  const [activities, setActivities] = useState([])


  function handleAddActivity(newActivity){
    setActivities([...activities, newActivity])
  }

  useEffect(() => {
    fetch("http://localhost:9292/activities")
    .then(r => r.json())
    .then(data => {
    setActivities(data)
    })
},[])



  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/activities">
            <ActivitiesList 
            activities={activities}/>
          </Route>
          <Route exact path="/new">
            <CreateActivity onAddActivity = {handleAddActivity}/>
          </Route>
          {/* <Route >
            <ActivityPage/>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
