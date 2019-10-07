import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../../hooks/index'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Button } from 'semantic-ui-react'




const Signup = (props) => {
  const [username, resetUsername] = useField('text')
  const [picture, resetPicture] = useField('text')
  const [password, resetPassword] = useField('password')

  const handleSubmit = (e) => {
    e.preventDefault()

    resetPicture('')
    resetPassword('')
    resetUsername('')
  }


  return (
    <div className="ui raised very padded text segment">
      <h1 className="ui center aligned icon header">
        Sign Up
            <i className="images outline icon"></i>
      </h1>

      <Form
        onSubmit={handleSubmit}>
        <div className="field">
          <Input
            label="Username"
            validators={['required', 'minStringLength: 4', 'isEmpty']}
            errorMessages={
              [
                'username is required',
                'min length 4'
              ]
            }
            {...username} />
        </div>
        <div className="field">
          <Input
            label="Password"
            validators={['required', 'minStringLength: 4', 'isEmpty']}
            errorMessages={
              [
                'password is required',
                'min length 4'
              ]
            }
            {...password} />
        </div>
        <div className="field">
          <Input
            label="Picture"
            validators={['required']}
            errorMessages={['picture is required']}
            {...picture} />
        </div>

        <Button className="ui button submit" type="submit">Sign Up</Button>
      </Form>
    </div>
  )
}

export default Signup