import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className="ui fixed inverted main menu">
  <div className="ui container">
    <div className="launch icon item">
    <i className="image icon"></i>
    </div>
      <div className="item">
      <Link to="/">Home</Link>
      </div>
      <div className="item">
      <Link to="/blogs">blogs</Link>
      </div>
      <div className="item">
      <Link to="/users">Users</Link>
      </div>
      <div className="right menu">
    <div className="ui item">
    <Link to="/login">Login or logout</Link>
    </div>
  </div>
    
</div>
</div>



  )
}

export default Navbar