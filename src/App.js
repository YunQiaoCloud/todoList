import React, { Component } from 'react'
import logo from './logo.svg'
import './style/App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div className="App-test">测试scss</div>
        </header>
        <p className="App-intro">
          To get staaaaarted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
