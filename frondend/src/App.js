import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { initializeBlogs } from "./reducers/blogs.reducer"
import { Container } from 'semantic-ui-react'
import Blogs from './components/blogs/blogs';

function App(props) {
  useEffect(() => {
    props.initializeBlogs()

  }, [])
  return (
    <Container>
      <Blogs />
    </Container>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  {
    initializeBlogs
  })(App);
