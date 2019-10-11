import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeBlogs } from './reducers/blogs.reducer'
import { initializeUser } from './reducers/user.reducer'
import { initializeUsers } from './reducers/users.reducer'
import Blogs from './components/blogs/blogs'
import Blog from './components/blogs/blog/blog'
import Users from './components/users/users'
import User from './components/users/user/user'
import Navbar from './components/menu/menu'
import { Container } from 'semantic-ui-react'


import {
  BrowserRouter as Router,
  Route, HashRouter
} from 'react-router-dom'
import Landing from './components/landing'
import Login from './components/auth/login'

const App = (props) => {

  useEffect(() => {
    props.initializeBlogs()
    props.initializeUser()
    props.initializeUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Router>
        <HashRouter>
          <Container style={{ margin: '3rem' }}>
            <Navbar />
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path='/blogs/:id' render={({ match }) =>
              <Blog blog={props.blogs.find(b => b.id === match.params.id)} />
            } />
            <Route exact path='/blogs/' render={() => <Blogs />} />
            <Route exact path='/login/' render={() => <Login />} />
            <Route exact path='/users/' render={() => <Users />} />
            {props.users
              ?
              <Route exact path='/users/:id' render={({ match }) =>
                <User user={props.users.find(u => u.id === match.params.id)} />
              } />
              :
              <div> loading</div>
            }
          </Container>
        </HashRouter>
      </Router>
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    blogs: state.blogs,
    user: state.user,
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  {
    initializeBlogs,
    initializeUser,
    initializeUsers
  })(App)
