import React, {Component} from 'react';
import '../pages/partials/Header';
import '../Styles/HomePage.css'
import footer from './partials/footer'
  


class Home extends Component{
render(){
    return(
      <div onScroll={ this.handleScroll }>
      <section className="home">
          <div id="perf">
          
               <h1 id="landing-text">Welcome to the city of Cincinnati</h1>
        
          </div>
      </section>
    </div>
    );
    }
}
  
  export default Home;