import React from 'react'
import { useField } from '../../hooks/index';
import { connect } from 'react-redux';
import { login } from '../../reducers/user.reducer'

const Login = (props) => {

  const [username, resetUsername] = useField('text')
  const [password, resetPassword] = useField('password')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login( {username: username.value, password: password.value} )
    
    resetPassword('')
    resetUsername('')
  }

  return (
    <div style={{paddingTop: "20px"}}>
      <h2 className="ui center aligned icon header">
        <i className="unlock icon"></i>
        Login
      </h2>

      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Username</label>
          <input { ...username }  />
        </div>
        <div className="field">
          <label>Password</label>
          <input { ...password }/>
        </div>

        <button className="ui button submit" type="submit">Login</button>
      </form>
    </div>

  )
}

export default connect(null, { login })(Login)