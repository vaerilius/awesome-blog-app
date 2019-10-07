import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../reducers/user.reducer'

const Navbar = (props) => {

  const handleLogout = () => props.logout()

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
            {!props.user ? <Link to="/login">Login</Link> : null}
          </div>

          <div className="ui item">
            {props.user ? <img className="ui avatar image" alt="" src={props.user.picture} /> : null}
            {props.user ? <span>{props.user.name}</span> : null}
          </div>
          <div className="ui item">
            {props.user ?
              <div onClick={handleLogout}>
                Logout
              </div>
              : <Redirect to="/" />}
          </div>

        </div>

      </div>
    </div>



  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout })(Navbar)