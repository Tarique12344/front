import React, {Component} from 'react';
import fireworks from '../img/fireworksCinci.jpg';
import '../Styles/HomePage.css'
import queencity from '../img/queencity.jpeg';
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg';
  




class Home extends Component{
render(){
    return(
      <div onScroll={ this.handleScroll } id="homePage">
      <section className="home">
          <div id="perf">
               <h1 id="landing-text"> Welcome to World Tour Cinicinnati </h1> 
        
          </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={fireworks} className="d-block w-10 slideShow" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={queencity} className="d-block w-10 slideShow" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={paulbrownstadium} className="d-block w-10 slideShow" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span clasNames="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   <br />
      <br />
      <br />
      <br />
    </div>
    );
    }
}
  
  export default Home;