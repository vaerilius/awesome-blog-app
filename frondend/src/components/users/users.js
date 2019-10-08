import React from 'react'
import { connect } from 'react-redux'
import User from './user/userListItem'

const UsersListItem = (props) => {

  if (!props.users) {
    return (
      <div className="ui segment" style={{ padding: '100px' }}>
        <div className="ui active inverted dimmer">
          <div className="ui huge text loader">Users Loading...</div>
        </div>
        <p></p>
      </div>
    )
  }

  return (
    <div className="ui grid container center aligned">
      <div className="center aligned one column row">
        <div className="column">
          <div className="ui segment">
            <h2>Users</h2>
          </div>
        </div>
        <div className="ui huge middle aligned list">
          {props.users.map(user =>
            <User user={user} key={user.id} />
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    users: state.users
  }
}
export default connect(mapStateToProps)(UsersListItem)