import React from 'react'
import { Link } from 'react-router-dom'


const User = ({ user }) => {


  return (

    <div className="ui grid container center aligned">
      <div className="center aligned one column row">
        <div className="column">
          <div className="ui segment">
            <div className="ui centered card">
              <div className="image">
                <img src={user.picture} alt={user.picture}/>
              </div>
              <div className="content">
                <div className="header">{user.name}</div>
              </div>
              <div className="content">
                <div className="header">Pictures / Blogs:</div>
                <div className="description">
                  {user.blogs.map(b =>
                   <Link key={b.id} to={`/blogs/${b.id}`}>{b.title}</Link> 
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default User
