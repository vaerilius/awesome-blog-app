import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = (props) => {

  const img = {
    height: '15rem',
    width: 'auto',
    maxHeight: '25rem',
    minHeight: '15rem',
  }
  return (
    <>
      <Link to={`blogs/${props.blog.id}`}>
        <img className="bordered image"
          src={props.blog.url} alt={props.blog.url}
          style={img} />
      </Link>
    </>
  )
}

export default BlogListItem
