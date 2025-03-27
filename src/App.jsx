import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./Component/WelcomePage"
import Home from "./Pages/Home"
import SingleDog from "./Pages/SingleDog"
import AboutPage from "./Pages/AboutPage"
import ContactForm from "./Component/ContactForm"
import SuccessPage from "./Pages/SuccessPage"
import PrivacyPage from "./Pages/PrivacyPage"

function App() {
  

  return (
    <>
     <Router>
     <Routes>
     <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/dog/:name" element={<SingleDog />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactForm />}></Route>
      <Route path="/success" element={<SuccessPage />}></Route>
      <Route path="/privacy" element={<PrivacyPage />}></Route>
      
     </Routes>
     </Router>
   
    </>
  )
}

export default App
