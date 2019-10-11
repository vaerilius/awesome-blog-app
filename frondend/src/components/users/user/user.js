import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  return (
    <div className="ui centered card" style={{ marginTop: "7rem" }}>
      <div className="image">
        <img src={user.picture} alt={user.picture} />
      </div>
      <div className="content">
        <div className="header">{user.name}</div>
      </div>
      <div className="content">
        <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        </div>
      </div>
      <div className="content">
        <div className="header">
          <i className="image icon"></i>
          {user.blogs.length} Blogs</div>
        {user.blogs.map(b =>
          <div className="description" key={b.id}>
            <Link to={`/blogs/${b.id}`}>{b.title}</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default User
