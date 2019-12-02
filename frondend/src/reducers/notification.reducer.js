// Notification reducer ja action reactor

const reduser = (state = { type: '', message: null }, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.notification
    default:
      return state
  }
}

export const setNotification = (notification) => {
  return async dispatch => {
    dispatch({
      type: 'SET_MESSAGE',
      notification
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_MESSAGE',
        notification: { type: '', message: null }
      })
    }, 5000)
  }
}

export default reduser