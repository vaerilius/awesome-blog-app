import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { initializeBlogs } from "./reducers/blogs.reducer"
import Blogs from './components/blogs/blogs';
import Blog from './components/blogs/blog/blog';
import Navbar from './components/menu/menu';
import { Container } from 'semantic-ui-react'

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
        <Container style={{margin: "3rem"}}>
        <Navbar />

          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/blogs/:id" render={({ match }) =>
            <Blog blog={props.blogs.find(b => b.id === match.params.id)} />
          } />
        <Route exact path="/blogs" render={() => <Blogs />} />
          
        </Container>
        

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
