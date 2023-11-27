import React, { Component } from 'react'


 class Header extends Component {
  render() {
    return (
        <nav>
    <h1><a href="/">World Tour of Cincinnati</a></h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/attractions" class="btn">Attractions</a></li>
      <li><a href="/booking" class="btn">Booking</a></li>
      <li><a href="/about" class="btn">About</a></li>
      <li><a href="/contact" class="btn">Contact</a></li>
    </ul>
  </nav>
    )
  }
}
export default Header