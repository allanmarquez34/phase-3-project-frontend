import React from "react"
import ActivityPage from "./components/ActivityPage"
import Favorites from "./components/Favorites"
import MapPage from "./components/MapPage"
import NavBar from "./components/NavBar"

// import { useState } from 'react'
// import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ActivityPage/>
      <Favorites/>
      <MapPage/>
    </div>
  )
}

export default App
