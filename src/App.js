import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './style/layout.css'
import {Alert} from 'react-bootstrap'
import HeaderBar from './layout/headerBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
          good.
        </Alert>
      </div>
    )
  }
}

export default App
