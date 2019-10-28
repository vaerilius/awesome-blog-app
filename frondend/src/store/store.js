import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import blogsReducer from '../reducers/blogs.reducer'
import userReducer from '../reducers/user.reducer'
import usersReducer from '../reducers/users.reducer'
import notificationReducer from '../reducers/notification.reducer'

const reducer = combineReducers({
  blogs: blogsReducer,
  user: userReducer,
  users: usersReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store