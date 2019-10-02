import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = (props) => {

  const img = {
    height: "17rem",
    width: "17rem",
    maxHeight: "25rem",
    minHeight: "25rem",

  }

  return (
    <>
        <Link to={`blogs/${props.blog.id}`}> 
        <img src={props.blog.url} alt={props.blog.url}
         style={img}/>
        </Link>
    </>
  )
}

export default BlogListItem
