import './app.scss'

import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Dashboard from '../dashboard'
import Landing from '../landing'

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <header>
          <nav>
            <h1> Budget Tracker </h1>
            <ul>
              <li><Link to='/'> Home </Link> </li>
              <li><Link to='/dashboard'> Dashboard </Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
        </main>
      </div>
    )
  }
}

export default App
