import React from "react"
import { Link} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import PersonalTraining from "./PersonalTraining"
import GroupClasses from "./GroupClasses"
import Yoga from "./Yoga"
import Cardio from "./Cardio"


const Main = () => {
  return (
    <Router>
        <nav className="navbar">
          <div className="navbar-title">
            <h1>Fitness Club</h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services/*" element={<Services/>}>
          <Route path="personal-training" element={<PersonalTraining/>} />
          <Route path="group-classes" element={<GroupClasses/>} />
          <Route path="yoga" element={<Yoga/>} />
          <Route path="cardio" element={<Cardio/>} />
        </Route>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default Main

