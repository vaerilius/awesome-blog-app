import React from 'react'
import { connect } from 'react-redux'
import UserListItem from './user/userListItem'

// käyttäjä lista komponentti linkkeineen, järjestetty blogien mukaan
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
          {props.users
            .map(user =>
              <UserListItem user={user} key={user.id} />
            )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    users: state.users
      .sort((u1, u2) => u2.blogs.length - u1.blogs.length)
  }
}
export default connect(mapStateToProps)(UsersListItem)