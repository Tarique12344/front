import React, {Component} from 'react';
import '../pages/partials/Header';
import '../Styles/HomePage.css'
import '../pages/partials/footer'
import queencity from '../img/queencity.jpeg'
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg'
import fireworks from '../img/fireworksCinci.jpg'
import footer from './partials/footer'
  


class Home extends Component{
render(){
    return(
      <div onScroll={ this.handleScroll } id="homePage">
      {/* <section className="home">
          <div id="perf">
          
            
        
          </div>
      </section> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={queencity} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={paulbrownstadium} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={fireworks} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>

    );
    }
}
  
  export default Home;