import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./Component/WelcomePage"
import Home from "./Pages/Home"
import SingleDog from "./Pages/singleDog"

function App() {
  

  return (
    <>
     <Router>
     <Routes>
     <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/dog/:name" element={<SingleDog />}></Route>
     </Routes>
     </Router>
   
    </>
  )
}

export default App
