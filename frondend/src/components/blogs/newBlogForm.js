import React from 'react'
import { connect } from 'react-redux'
import { onAddBlog } from '../../reducers/blogs.reducer'
import { useField } from '../../hooks/index'
import { Form, Input, TextArea } from 'semantic-ui-react-form-validator'

const NewBlog = (props) => {
  const [title, resetTitle] = useField('text')
  const [url, resetUrl] = useField('text')
  const [description, resetDescription] = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()
    const newBlog = {
      title: title.value,
      url: url.value,
      description: description.value
    }

    props.onAddBlog(newBlog)
    props.newBlogRef.current.toggleVisibility()
    resetTitle()

    resetUrl()

    resetDescription()

  }

  return (
    <Form
      className="ui form"
      // instantValidate={false}
      onSubmit={handleSubmit}>
      <div className="field">
        <label>title</label>
        <Input
          {...title}
          validators={['required:1', 'minStringLength: 6']}
          errorMessages={['this field is required', 'min length is 6']}
        />
      </div>
      <div className="field">
        <label>url</label>
        <Input
          {...url}
          validators={['required:1', 'minStringLength: 10']}
          errorMessages={['this field is required', 'Image url min length is 10']}
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
      <button className="ui button" type="submit">Create new blog</button>
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
