import React from 'react'
import { connect } from 'react-redux'
import Signup from './auth/signup'

const Landing = (props) => {

  return (
    <>
      <div className="ui raised very padded text segment" style={{margin: "7rem"}}>
        <h1 className="ui center aligned icon header">
          Awesome Blog App
          <i className="images outline icon"></i>
        </h1>
        <h2 className="ui header">Home / landing page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec auctor mi ut lacinia semper. Aliquam non rutrum massa.
          Vestibulum commodo congue metus, a euismod diam accumsan non.
          Quisque lobortis vitae risus in porta.
          Aliquam viverra volutpat diam, vitae dapibus orci sodales ut.
          Integer interdum lorem sit amet purus blandit congue ac sed tortor.
          Ut mollis diam purus, a vehicula ante lacinia ac. Duis in justo tellus              Pellentesque sollicitudin suscipit nunc vel placerat.
          Sed pharetra diam nulla, vitae placerat dolor lacinia vel.
          Suspendisse porttitor aliquet interdum.
        </p>
      </div>
      {!props.user
      ?
      <Signup /> 
      : null
    }
    </>


  )

}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Landing)
