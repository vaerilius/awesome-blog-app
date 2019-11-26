import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLikeBlog, onRemoveBlog, onAddComment } from '../../../reducers/blogs.reducer'
import { useField } from '../../../hooks/index'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'


const Blog = (props) => {
  const [comment, clearComment] = useField('text')

  if (!props.blog) {

    return (
      <div className="ui vertically divided grid centered">
        <Link to={'/blogs'}>
          <Button primary>
            Back to blogs <Icon name='step backward' />
          </Button>
        </Link>
        <div className="inverted dimmer">
          <div className="ui text huge loader">Blogs Loading...</div>
        </div>

      </div>
    )
  }

  const findUserPicture = (userID) => {
    const findedUser = props.users.find(u => u.id === userID)
    if (findedUser) {
      return findedUser.picture
    } else {
      return null
    }
  }

  const like = () => props.onLikeBlog(props.blog, props.user.id)

  const remove = () => {
    if (window.confirm('Do you really want to remove so nice picture')) {
      props.onRemoveBlog(props.blog.id)
    }
  }

  const handleComment = () => {
    props.onAddComment({ comment: comment.value, user: props.user.id }, props.blog.id)
    clearComment()
  }

  return (
    <div className="ui vertically divided grid centered">
      <div className="two column row ">
        <div className="column">
          <div className="ui fluid card centered ">
            <div className="content">
              <div className="header"> {props.blog.title}</div>
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
              <button className={props.blog.usersLiked
                // .includes(props.user.id)
                .find(u => u.id === props.user.id) ? 'ui disabled button' : 'ui button'}
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
                <i className="inverted circular comment link icon"
                  onClick={handleComment}>
                </i>
              </div>
              : null
            }
            {props.user && props.blog.user.id === props.user.id
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

              {props.blog.comments.length > 0
                ? <p className="ui icon header"> Comments: </p>
                : <p className="ui icon header">No comments </p>}
              <div className="ui relaxed divided list">
                {props.blog.comments.map(comment =>
                  <div className="item" key={comment._id}>
                    <Image className="ui avatar image"
                      src={findUserPicture(comment.user)} />
                    <div className="content">
                      <div className="center aligned item" >
                        {comment.comment}
                      </div>
                    </div>
                  </div>
                )}
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
    </div >


  )
}
const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users
  }
}

export default connect(mapStateToProps,
  {
    onLikeBlog,
    onRemoveBlog,
    onAddComment
  }
)(Blog)
