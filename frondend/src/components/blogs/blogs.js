import React from 'react'
import { connect } from 'react-redux'
import NewBlogForm from './newBlogForm'
import BlosListItem from './blogListItem'

const Blogs = (props) => {

  return (

    <div className="ui grid container center aligned">
        <div className="center aligned one column row">
    <div className="column">
      <div className="ui segment">
        <h2>Blogs / pictures</h2>
        <NewBlogForm />
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

