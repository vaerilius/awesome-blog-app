import React from 'react'
import { connect } from 'react-redux'
import NewBlogForm from './newBlogForm'
import BlosListItem from './blogListItem'
import Togglable from '../togglable'

const Blogs = (props) => {

  if (!props.blogs.length > 0) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text huge loader">Blogs Loading...</div>
      </div>
    )
  }
  const newBlogRef = React.createRef()
  return (

    <div className="ui grid  center aligned">
      <div className="center aligned one column row">
        <div className="column">
          <div className="ui segment">
            <h2>Blogs / pictures</h2>
            {props.user
              ?
              <Togglable buttonLabel='Create new Blog' ref={newBlogRef}>
                <NewBlogForm newBlogRef={newBlogRef} />
              </Togglable>
              : null
            }
          </div>
        </div>
      </div>
      {props.blogs.map(blog =>
        <div className="ui small images rounded" key={blog.id}>
          <BlosListItem blog={blog} />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const sortByLikes = (b1, b2) => b2.likes - b1.likes
  return {
    blogs: state.blogs.sort(sortByLikes),
    user: state.user
  }
}

export default connect(mapStateToProps)(Blogs)

