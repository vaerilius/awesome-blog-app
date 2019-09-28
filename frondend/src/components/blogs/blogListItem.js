import React from 'react'

const BlogListItem = (props) => {

  return (
    <>
      <td>{props.blog.title}</td>
      <td>{props.blog.user.name}</td>

      <td ><img className="ui tiny image center aligned" alt="joku" src={props.blog.url} /></td>
      <td className="right aligned">{props.blog.likes}</td>


  </>
  )

}

export default BlogListItem
