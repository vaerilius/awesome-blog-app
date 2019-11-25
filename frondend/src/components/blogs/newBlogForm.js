import React, { useState } from 'react'
import { connect } from 'react-redux'
import { onAddBlog } from '../../reducers/blogs.reducer'
import { useField } from '../../hooks/index'
import { Form, TextArea } from 'semantic-ui-react-form-validator'

const NewBlog = (props) => {
  const [title, resetTitle] = useField('text')
  const [blogImage, setBlogImage] = useState(null)
  const [description, resetDescription] = useField('text')


  const handleSubmit = () => {
    // const newBlog = {
    //   title: title.value,
    //   url: url.value,
    //   description: description.value
    // }
    // console.log(blogImage)

    const formData = new FormData()
    formData.append('blogImage', blogImage)
    formData.append('title', title.value)
    formData.append('description', description.value)

    props.onAddBlog(formData)
    props.newBlogRef.current.toggleVisibility()
    resetTitle()
    setBlogImage(null)
    resetDescription()
    return true
  }

  return (
    <Form
      className="ui form"
      // instantValidate={false}
      onSubmit={handleSubmit}>
      <div className="field">
        <label>title</label>
        <TextArea
          {...title}
          rows="1"

          validators={['required:1', 'minStringLength: 4']}
          errorMessages={['this field is required', 'min length is 4']}
        />
      </div>
      <div className="field">
        <label>url</label>
        <input
          onChange={({ target }) => setBlogImage(target.files[0])}
          type='file'
          // {...url}
          // validators={['required:1']}
          // errorMessages={['this field is required']}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <TextArea
          rows="2"
          {...description}
          validators={['required:1', 'minStringLength: 4']}
          errorMessages={['this field is required', 'min length is 4']}
        />
      </div>
      <button
        className="ui button" type="submit"
        style={{ marginBottom: '2rem' }}>
        Create new blog
      </button>
    </Form>
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
    onAddBlog,
  }
)(NewBlog)
