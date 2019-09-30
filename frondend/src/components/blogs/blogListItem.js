import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = (props) => {

  return (
    <>
        <Link to={`blogs/${props.blog.id}`}> 
        <img src={props.blog.url} alt={props.blog.url}/>
        </Link>
    </>

  )
}

export default BlogListItem
