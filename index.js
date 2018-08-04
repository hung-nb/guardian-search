const React = require('react')
const { render } = require('react-dom')
const { Provider, connect } = require('react-redux')
const store = require('./redux')

const App = require('./app')

// bootstrap react
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'))
