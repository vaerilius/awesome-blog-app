import React from 'react'
import { connect } from 'react-redux'
import NewBlogForm from './newBlogForm'
import { Table, Image, Header, Icon } from 'semantic-ui-react'

const Blogs = (props) => {

  return (
    <div>
          <Header  size='huge' icon textAlign='center'>
      
      <Header.Content><Icon name='images' circular />Blogs</Header.Content>
      <NewBlogForm />
    </Header>
    
    <Table striped celled>
    <Table.Header >

      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>Likes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
      <Table.Body>
        {props.blogs.map(blog =>
          <Table.Row key={blog.id}>
            <Table.Cell>
                {blog.title}
            </Table.Cell>
            <Table.Cell>
            <Image src={blog.url} size='tiny' circular />
            </Table.Cell>
            <Table.Cell>
                {blog.likes}
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </div>
  )

}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(Blogs)
