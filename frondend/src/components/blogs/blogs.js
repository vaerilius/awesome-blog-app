import React from 'react'
import { connect } from 'react-redux'
import NewBlogForm from './newBlogForm'
import BlosListItem from './blogListItem'
import Togglable from '../togglable'

const Blogs = (props) => {
  const newBlogRef = React.createRef()
  return (

    <div className="ui grid container center aligned">
      <div className="center aligned one column row">
        <div className="column">
          <div className="ui segment">
            <h2>Blogs / pictures</h2>
            <Togglable buttonLabel='Create new Blog' ref={newBlogRef}>
              <NewBlogForm newBlogRef={newBlogRef} />
              
            </Togglable>
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
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(Blogs)

