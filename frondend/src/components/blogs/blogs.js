import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import NewBlogForm from './newBlogForm'
import BlosListItem from './blogListItem'
import Togglable from '../togglable'
import { Button } from 'semantic-ui-react'


const Blogs = (props) => {
  const [blogstTo, setBlogsTo] = useState(3)
  const [blogsFrom, setBlogsFrom] = useState(0)
  const [blogs, setBlogs] = useState([])



  if (!props.blogs) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text huge loader">Blogs Loading...</div>
      </div>
    )
  }
  const newBlogRef = React.createRef()

  const handleClick = (text) => {

    if (text === 'following') {

      setBlogsTo((blogstTo + 3))
      setBlogsFrom((blogsFrom + 3))
    }
    setBlogsTo(blogstTo - 3)

    setBlogsFrom(blogsFrom - 3)

  }
  console.log(blogs);

  return (

    <div className="ui grid  center aligned">
      <div className="center aligned one column row">
        <div className="column">
          <div className="ui segment">
            <h2>Blogs / pictures</h2>
            <button className="ui button" style={{ margin: '5px' }} onClick={() => handleClick('previous')}>
              <i className="angle double left icon"></i>
            </button>
            <button className="ui button" style={{ margin: '5px' }} onClick={() => handleClick('following')}>
              <i className="angle double right icon"></i>
            </button>
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
      {props.blogs
        .map()
        .map(blog =>
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

