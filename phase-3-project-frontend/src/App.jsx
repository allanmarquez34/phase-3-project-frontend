import React from "react"
import ActivityPage from "./components/ActivityPage"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreateActivity from "./CreateActivity"

// import { useState } from 'react'
// import './App.css'

function App() {

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
