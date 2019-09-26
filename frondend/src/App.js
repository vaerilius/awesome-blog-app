import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { initializeBlogs } from "./reducers/blogs.reducer";

function App(props) {
  useEffect(() => {
    props.initializeBlogs()

  }, [])
  return (
    <div>
      <h1>blogs from backend to frond end</h1>
      <ul>
        {props.blogs.map(blog => 
          <li key={blog.id}>
           
            <img src={blog.url} alt="" style={{maxHeight: 200}}/>
            {blog.title}
          </li>
          )}
        

      </ul>
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
