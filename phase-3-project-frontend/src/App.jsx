import React from "react"
import ActivityPage from "./components/ActivityPage"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateActivity from "./components/CreateActivity"
import { useState, useEffect } from 'react'
// import './App.css'

function App() {
  const [activities, setActivities] = useState([])



  useEffect(() => {
    fetch("")
    .then(r=> r.json())
    .then(data => {
      setActivities(data)
    })
  }, [])


  return (
    <div>
      <NavBar/>
      <ActivityPage/>
      <CreateActivity/>
      <Home/>
    </div>
  )
}

export default App
