import React from 'react'

const Blog = (props) => {
  if(props.blog === undefined) {
    return <h1>joo</h1>
  }

  return (
<div className="ui card">
  <div className="content">
    <div className="right floated meta">14h</div>
    <img className="ui avatar image"  alt="aa"/> Elliot
  </div>
  <div className="image" >
    <img src={props.blog.url} alt="aaa"/>
  </div>
  <div className="content">
    <span className="right floated">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    3 comments
  </div>
  <div className="extra content">
    <div className="ui large transparent left icon input">
      <i className="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..." />
    </div>
  </div>
</div>
  )

}

export default Blog
