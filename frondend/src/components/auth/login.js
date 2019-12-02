import React from 'react'
import { useField } from '../../hooks/index'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../reducers/user.reducer'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Button } from 'semantic-ui-react'

// Login komponentti ja viedään login data user reducerille.
//ei mitään muuta ihmeellistä

const Login = (props) => {

  const [username, resetUsername] = useField('text')
  const [password, resetPassword] = useField('password')

  const handleSubmit = () => {
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

      <Form
        className="ui form"
        instantValidate={false}
        onSubmit={handleSubmit}>
        <div className='field'>
          <label>Username</label>
          <Input {...username}
            validators={['required:1', 'minStringLength: 4']}
            errorMessages={['this field is required', 'min length is 4']}
          />
        </div>
        <div className='field'>
          <label>Password</label>
          <Input {...password}
            validators={['required:1', 'minStringLength: 4']}
            errorMessages={['this field is required', 'min length is 4']}
          />
        </div>
        {!props.user
          ?
          <Button className='ui button submit' type='submit'>
            Login
          </Button>
          : <Redirect to="/" />
        }
      </Form>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login })(Login)
