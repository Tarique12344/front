import React, { Component } from 'react'
import '../../Styles/HomePage.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


 class Header extends Component {
  render() {
    return (
  
    <nav className="navbar navbar-expand-lg navbar-text ">
        <div className="container">
        
            <a className="navbar-brand navbar-text" href="#!">Welcome to World Tour Of Cincinnati</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="/booking">Booking</a></li>
                    <li className="nav-item"><a className="nav-link" href="/attractions">Attractions</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                </ul>
               
            </div>
        </div>
    </nav>
    
    )
  }
}

export default Header