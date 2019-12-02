import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// tuodaan reducerit
import blogsReducer from '../reducers/blogs.reducer'
import userReducer from '../reducers/user.reducer'
import usersReducer from '../reducers/users.reducer'
import notificationReducer from '../reducers/notification.reducer'

// alustetaan tuodut rederit yhteen reduceriin
const reducer = combineReducers({
  blogs: blogsReducer,
  user: userReducer,
  users: usersReducer,
  notification: notificationReducer
})

// luodaan store, joka siis siältää kaikki reducerit.
// Tässä on nyt sovelluksen tilan hallinta (flux)
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store