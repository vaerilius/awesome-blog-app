import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { initializeBlogs } from "./reducers/blogs.reducer"
import Blogs from './components/blogs/blogs';
import Blog from './components/blogs/blog/blog';
import Navbar from './components/menu/menu';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Landing from './components/landing';

const App = (props) => {
  
  useEffect(() => {
    props.initializeBlogs()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <div className="ui container">
          <h2>Awesome Blog App</h2>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/blogs/:id" render={({ match }) =>
            <Blog blog={props.blogs.find(b => b.id === match.params.id)} />
          } />
          


        </div>
        <Route exact path="/blogs" render={() => <Blogs />} />
        




      </Router>

    </>

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
