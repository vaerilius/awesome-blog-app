import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../reducers/user.reducer'

const Navbar = (props) => {

  const handleLogout = () => props.logout()

  return (

    <div className="ui small fixed menu">
      <div className="launch icon item">
        <Link to="/"> <i className="image icon"></i></Link>
      </div>
      <div className="item">
        <Link to="/blogs"><i className="images icon"></i></Link>
      </div>
      <div className="item">
        <Link to="/users"><i className="users icon"></i></Link>
      </div>
      <div className="right menu">
        {!props.user
          ?
          <div className="ui item">
            <Link to="/login">Login</Link>
          </div>
          :
          <>
            <div className="ui item">
              <img className="ui avatar image" alt="" src={props.user.picture} />
              <span>{props.user.username}</span>
            </div>
            <div className="ui item">
              {props.user ?
                <div onClick={handleLogout}>
                  Logout
                      </div>
                : <Redirect to="/" />}
            </div>
          </>
        }
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