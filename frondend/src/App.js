import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { initializeBlogs } from "./reducers/blogs.reducer";

function App(props) {
  useEffect(() => {
    props.initializeBlogs()

  }, [])
  return (
    <div>
      <h1>app created</h1>
    </div>
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
