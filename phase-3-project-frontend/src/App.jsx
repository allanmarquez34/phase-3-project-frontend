import React from "react"
import ActivitiesList from "./components/ActivitiesList"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateActivity from "./components/CreateActivity"
import ActivityPage from "./components/ActivityPage"
import EditActivity from "./components/EditActivity"
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import './App.css'

function App() {
  const [activities, setActivities] = useState([])
  const [selectedActivty, setSelectedActivity] = useState(null)

  function handleChangeForm(name, value) {
    setSelectedActivity({
      ...selectedActivty,
      [name]: value,
    });
  }

  function handleEditActivty(updatedActivity) {
    const updatedActivities = activities.map((oneActivity) =>
      oneActivity.id === updatedActivity.id ? updatedActivity : oneActivity
    );
    setSelectedActivity(updatedActivity);
    setActivities(updatedActivities);
  }

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
                onActivityDelete ={onActivityDelete}
                onSelectedActivity={setSelectedActivity}/>
            </Route>
            <Route exact path="/new">
                <CreateActivity 
                onAddActivity={handleAddActivity}/>
            </Route>
            <Route path = "/oneactivity/:id">
                <ActivityPage />
            </Route>
            <Route path="/:id/edit" >
                <EditActivity 
                  activities={selectedActivty}
                  onChangeForm={handleChangeForm}
                  onEditActivity={handleEditActivty}/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
