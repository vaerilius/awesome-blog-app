import React from 'react'
import { connect } from 'react-redux'

// Notification komponentti, näkyminen asetetaan näkymään reducereilla
const Notfication = ({ notification }) => {

  if (notification.message === null) {
    return null
  }
  return (
    <div className={notification.class}>
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