import React, { useState } from 'react'
import { connect } from 'react-redux'
import { onAddBlog } from "../../reducers/blogs.reducer"

import { useField } from '../../hooks/index'

const NewBlog= (props) => {
  const [title, resetTitle] = useField('text')
  const [url, resetUrl] = useField('text')
  const [description, resetDescription] = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title.value)

    const newBlog = {
      title: title.value,
      url: url.value,
      author: 'timo testaaja',
      description: description.value
    }

    props.onAddBlog(newBlog)

    resetTitle()
    resetUrl()
    resetDescription()

  }

  return (
<form className="ui form" onSubmit={handleSubmit}>
  <div className="field">
    <label>title</label>
    <input  {...title}  />
  </div>
  <div className="field">
    <label>url</label>
    <input  {...url} />
  </div>
  <div className="field">
    <label>Description</label>
    <input  {...description} />
  </div>
  <button className="ui button" type="submit">Submit</button>
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
