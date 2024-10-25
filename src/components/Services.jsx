import React from "react"
import { Link, Outlet } from "react-router-dom"

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <ul>
          <li><Link to="personal-training">Personal Training</Link></li>
          <li><Link to="group-classes">Group Classes</Link></li>
          <li><Link to="yoga">Yoga</Link></li>
          <li><Link to="cardio">Cardio</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Services
