import React from 'react'
import { connect } from 'react-redux'


const Notfication = ({ notification }) => {

  if (notification.message === null) {
    return null
  }
  return (
    <div className={notification.class}>
      <i className="close icon"></i>
      <div className="header">
        {notification.message}
      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notfication)