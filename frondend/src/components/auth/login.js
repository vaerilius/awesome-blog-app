import React from 'react'
import { useField } from '../../hooks/index'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../reducers/user.reducer'

const Login = (props) => {

  const [username, resetUsername] = useField('text')
  const [password, resetPassword] = useField('password')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login({ username: username.value, password: password.value })

    resetPassword('')
    resetUsername('')
  }

  return (
    <div style={{ paddingTop: '20px' }}>
      <h2 className="ui center aligned icon header">
        <i className="unlock icon"></i>
        Login
      </h2>

      <form className="ui form" onSubmit={handleSubmit}>
        <div className='field'>
          <label>Username</label>
          <input {...username} />
        </div>
        <div className='field'>
          <label>Password</label>
          <input {...password} />
        </div>
        {!props.user
          ?
          <button className='ui button submit' type='submit'>
            Login
          </button>
          : <Redirect to="/" />
        }
      </form>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login })(Login)
