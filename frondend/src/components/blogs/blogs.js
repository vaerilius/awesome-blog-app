import React from 'react'
import { connect } from 'react-redux'
import NewBlogForm from './newBlogForm'
import BlosListItem from './blogListItem'
import { Header, Icon } from 'semantic-ui-react'

const Blogs = (props) => {

  return (
    <div>
          <Header  size='huge' icon textAlign='center'>
      
      <Header.Content><Icon name='images' circular />Blogs</Header.Content>
      <NewBlogForm />
    </Header>
    
    <table className="ui selectable inverted blue table">
  <thead>
    <tr>
      <th>Title</th>
      <th>User</th>
      <th className="right aligned">Picture</th>
      <th className="right aligned">Likes</th>
    </tr>
  </thead>
  <tbody>
  
      {props.blogs.map(blog => 
        <tr key={blog}>
        <BlosListItem blog={blog} />
        </tr>

        )}


  </tbody>
</table>
  </div>
  )

}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(Blogs)
