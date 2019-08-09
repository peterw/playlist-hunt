import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './app.css';

class Home extends React.Component {
  render() {
    return  <div> <Link to="/testing">About</Link>
 </div>
  }
}
export default Home