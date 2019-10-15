import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const User = (props) => {

  if (!props.user) {
    return(
      <div>loading</div>
    )
  }


  return (
    <div className="item" key={ props.user.id }>
      <div className="right floated">Blogs: {props.blogs.map(b => b.user.username === props.user.username)
      .reduce((a, b) => a + b)
      }</div>
      <img className="ui avatar image" src={props.user.picture} alt={props.user.picture} />
      <div className="content">
        <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    
    return {
    blogs: state.blogs
    }
  }

export default connect(
  mapStateToProps
  )(User)
