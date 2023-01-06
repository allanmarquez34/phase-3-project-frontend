import React from "react"
import ActivitiesList from "./components/ActivitiesList"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateActivity from "./components/CreateActivity"
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"


function App() {
  const [activities, setActivities] = useState([])


  function handleAddActivity(newActivity){
    setActivities([...activities, newActivity])
  }

  const onActivityDelete = (activityId) => {
    setActivities(activities => activities.filter(a => a.id !==activityId))
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
            activities={activities}
            onActivityDelete ={onActivityDelete}/>
          </Route>
          <Route exact path="/new">
            <CreateActivity 
            onAddActivity={handleAddActivity}/>
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
