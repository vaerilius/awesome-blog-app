import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLikeBlog, onRemoveBlog, onAddComment } from '../../../reducers/blogs.reducer'
import { useField } from '../../../hooks/index'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const Blog = (props) => {
  const [comment, clearComment] = useField('text')


  const like = () => props.onLikeBlog(props.blog)
  const remove = () => {
    if (window.confirm('Do you really want to remove so nice picture')) {
      props.onRemoveBlog(props.blog.id)
    }

  }

  if (props.blog === undefined) {
    return <h2>loading</h2>
  }

  const handleComment = () => {
    props.onAddComment({ comment: comment.value }, props.blog.id)
    clearComment()
  }

  return (
    <div className="ui vertically divided grid centered">
      <div className="two column row ">
        <div className="column">
          <div className="ui fluid card centered ">
            <div className="content">
              <div className="header">Title: {props.blog.title}</div>
            </div>
            <div className="image" >
              <Modal
                trigger={
                  <Image src={props.blog.url} alt="aaa" />}>
                <Modal.Content image>
                  <Image wrapped size='huge' src={props.blog.url} />
                </Modal.Content>
              </Modal>
            </div>
            <div className="content">
              <span className="right floated">
                <i className="heart outline like icon"></i>
                {props.blog.likes} Likes
              </span>
              <i className="comment icon"></i>
              {props.blog.comments.length} comments
            </div>
            {props.user
              ?
              <button className="ui button"
                onClick={like}>
                <i className="heart icon"></i>
                Like
              </button>
              : null
            }
            {props.user
              ?
              <div className="ui fluid icon input">
                <input
                  placeholder="Comment.."
                  {...comment}
                />
                <button className="ui button" onClick={handleComment}>
                  <i className="comment icon"></i>
                  Comment
                </button>
              </div>
              : null
            }
            {props.user
              ?
              <Link
                to={'/blogs'}
                className={'ui button'}
                onClick={remove}>
                <i className="trash icon"></i>
                Remove
              </Link>
              : null
            }
          </div>
        </div>
        <div className="column ">
          <div className="ui fluid card">
            <div className="content">
              <div className="center aligned header">
                <Image wrapped size='tiny' src={props.blog.user.picture} />
                <h3>
                  {props.blog.user.name}
                </h3>
              </div>
              <div className="center aligned description">
                <p className="ui header">Description: </p>
                <p>{props.blog.description}</p>
              </div>
            </div>
            <div className="extra content">
              <p className="ui icon header">Comments: </p>

              <div className="ui list">
                {props.blog.comments.map(comment =>
                  <div className="center aligned item" key={comment}>
                    {comment}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/blogs'}>
        <Button primary>
          Back to blogs <Icon name='step backward' />
        </Button>
      </Link>
    </div>

  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,
  {
    onLikeBlog,
    onRemoveBlog,
    onAddComment
  }
)(Blog)
