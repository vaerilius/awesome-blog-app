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
    const formData = new FormData()
    formData.append('blogImage', blogImage)
    formData.append('title', title.value)
    formData.append('description', description.value)

    props.onAddBlog(formData)
    resetTitle()
    setBlogImage(null)
    // document.querySelector('#file_input_file').nodeValue = ''
    resetDescription()
    props.newBlogRef.current.toggleVisibility()

    return true
  }

  return (
    <Form
      instantValidate={false}
      className="ui form"
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
          // key={blogImage}
          // id="file_input_file"
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
