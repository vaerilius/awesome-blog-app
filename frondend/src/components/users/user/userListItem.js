import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  return (
    <div className="item" key={ user.id }>
      <div className="right floated">Blogs: {user.blogs.length}</div>
      <img className="ui avatar image" src={user.picture} alt={user.picture} />
      <div className="content">
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </div>
    </div>
  )
}

export default User
