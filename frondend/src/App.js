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
import Notification from './components/notification'
import { Container } from 'semantic-ui-react'
import io from 'socket.io-client'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Landing from './components/landing'
import Login from './components/auth/login'

const socket = io('https://calm-reaches-63250.herokuapp.com/')

//importataan kaikki tarvittava Appiin (komponentit, kirjastot, yms.)
const App = (props) => {

  // alustetaan reducerit ja muiden käyttäjien tekemät muutokset sovellukseen socketin avulla (polling)
  // vähän huono ratkaisu, mutta toimii
  useEffect(() => {

    socket.on('init', (data) => {
      props.initializeBlogs()
      props.initializeUsers()
    })

    props.initializeBlogs()
    props.initializeUsers()
    props.initializeUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // palautetaan spinner jos ei löydy
  if (!props.blogs && props.users) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text huge loader">Blogs Loading...</div>
      </div>
    )
  }

  // palautetaan Routerin url:n komponenttit, css Semantic ui
  return (
    <>
      <Router>
        <Container style={{ margin: '5rem' }}>
          <Navbar />
          <Notification />
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path='/blogs/:id' render={({ match }) =>
            <Blog blog={props.blogs.find(b => b.id === match.params.id)} />
          } />
          <Route exact path='/blogs/' render={() => <Blogs />} />
          <Route exact path='/login/' render={() => <Login />} />
          <Route exact path='/users/' render={() => <Users />} />

          <Route exact path='/users/:id' render={({ match }) =>
            <User user={props.users.find(u => u.id === match.params.id)} />
          } />
        </Container>
      </Router>
    </>
  )
}

// tuodaan propsit ja exportataan App komponentti käyttäen reduksin connectia. 

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
