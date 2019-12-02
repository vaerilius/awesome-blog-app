import React from 'react'
import { Link } from 'react-router-dom'
// pelkkä user lista kompponentti 
const UserListItem = (props) => {

  if (!props.user) {
    return (
      <div>loading</div>
    )
  }

  return (
    <div className="item" key={props.user.id}>
      <div className="right floated">Blogs: {props.user.blogs.length}</div>
      <img className="ui avatar image" src={props.user.picture} alt={props.user.picture} />
      <div className="content">
        <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
      </div>
    </div>
  )
}

export default UserListItem
