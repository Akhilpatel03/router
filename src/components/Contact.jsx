import React, { useState, useEffect } from "react"

const Contact = () => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    console.log("Contact Page Loaded")
  }, [])
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Reach out to us for membership and other inquiries.</p>
      <input type="text" placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)}/>
    </div>
  )
}

export default Contact

