
import './App.css';
import React, { Component} from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './pages/partials/Header';
import './Styles/HomePage.css'




class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Router>
          <Route exact path='/' component={Home}/>
        </Router>
      </div>
    )
  }
}
export default App
