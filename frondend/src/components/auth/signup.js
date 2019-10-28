import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../reducers/users.reducer'
import { useField } from '../../hooks/index'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Button } from 'semantic-ui-react'

const Signup = (props) => {
  const [username, resetUsername] = useField('text')
  const [name, resetName] = useField('text')
  const [picture, resetPicture] = useField('text')
  const [password, resetPassword] = useField('password')

  const handleSubmit = () => {
    const newUser = {
      username: username.value,
      password: password.value,
      picture: picture.value,
      name: name.value
    }
    props.signUp(newUser)

    resetName('')
    resetPicture('')
    resetPassword('')
    resetUsername('')
    return true
  }


  return (
    <div className="ui raised very padded text segment" >
      <h1 className="ui center aligned icon header">
        Sign Up
        <i className="images outline icon"></i>
      </h1>

      <Form
        instantValidate={false}
        onSubmit={handleSubmit}>
        <div className="field">
          <Input
            label="Username"
            validators={['required:1', 'minStringLength: 4']}
            errorMessages={['this field is required', 'min length is 4']}
            {...username} />
        </div>
        <div className="field">
          <Input
            label="Password"
            validators={['required:1', 'minStringLength: 4']}
            errorMessages={['this field is required', 'min length is 4']}
            {...password} />
        </div>
        <div className="field">
          <Input
            label="Name"
            validators={['required:1']}
            errorMessages={['this field is required']}
            {...name} />
        </div>
        <div className="field">
          <Input
            label="Picture"
            validators={['required:1']}
            errorMessages={['this field is required']}
            {...picture} />
        </div>
        <Button
          className="ui button submit"
          type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default connect(
  mapStateToProps,
  { signUp }
)(Signup)