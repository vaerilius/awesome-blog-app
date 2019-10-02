import React from 'react'
import { Link } from 'react-router-dom'


const Blog = (props) => {
  if (props.blog === undefined) {
    return <h1>joo</h1>
  }

  return (
    <div className="ui vertically divided grid centered">
      <div className="ui large header ">Title: {props.blog.title}</div>
      <div className="two column row ">
        <div className="column">
          <div className="ui card centered ">

            <div className="image" >
              <img src={props.blog.url} alt="aaa" />
            </div>
            <div className="ui button disabled">
              {props.blog.likes} Likes
                </div>
            <div className="ui button" >
              <i className="heart icon"></i>
              Like
            </div>

            <div className="extra content">
              <div className="ui large transparent left icon input">
                <input type="text" placeholder="Add Comment..." />
              </div>
            </div>
            <div className="ui button">
              <i className="comment icon"></i>
              Comment
                </div>
          </div>
        </div>
        <div className="column ">
          <div className="ui card">
            <div className="content">
              <div className="center aligned header">{props.blog.user.name}</div>
              <div className="center aligned description">
                <p className="ui icon header">Description: </p>
                <p>{props.blog.description}</p>
                <p>Link:</p>
                <a href={props.blog.url}>Picture link</a>
              </div>
            </div>
            <div className="extra content">
            <p className="ui icon header">Comments: </p>

              <div className="ui list">
                <div className="center aligned item">Apples</div>
                <div className="center aligned item">Pears</div>
                <div className="center aligned item">Oranges</div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Link to={'/blogs'}>
        <button className="ui active button">
          <i className="step backward icon"></i>Back to blogs</button>
      </Link>

    </div>



  )

}

export default Blog
