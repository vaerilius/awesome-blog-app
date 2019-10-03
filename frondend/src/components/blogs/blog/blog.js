import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLikeBlog } from '../../../reducers/blogs.reducer'


const Blog = (props) => {

  const handleClick = () => props.onLikeBlog(props.blog)

  if (props.blog === undefined) {
    return <h2>loading</h2>
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
            <button className="ui button" onClick={handleClick}>
              <i className="heart icon"></i>
              Like
            </button>

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

export default connect(null, { onLikeBlog })(Blog)
