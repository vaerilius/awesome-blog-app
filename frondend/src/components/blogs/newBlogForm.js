import React from 'react'
import { connect } from 'react-redux'
import { onAddBlog } from '../../reducers/blogs.reducer'

import { useField } from '../../hooks/index'

const NewBlog = (props) => {
  const [title, resetTitle] = useField('text')
  const [url, resetUrl] = useField('text')
  const [description, resetDescription] = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()

    const newBlog = {
      title: title.value,
      url: url.value,
      author: 'timo testaaja',
      description: description.value
    }

    props.onAddBlog(newBlog)
    props.newBlogRef.current.toggleVisibility()
    resetTitle()
    resetUrl()
    resetDescription()

  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>title</label>
        <input  {...title} />
      </div>
      <div className="field">
        <label>url</label>
        <input  {...url} />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea rows="2" {...description} />
      </div>
      <button className="ui button" type="submit">Create new blog</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}
export default connect(
  mapStateToProps,
  {
    onAddBlog
  }
)(NewBlog)
