import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'

// Renderöidään Reactin virtual DOM keskusmuistista selaimen DOM:ksi
// ja alustetaan sovellus käyttämään Reduxia (storella)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
