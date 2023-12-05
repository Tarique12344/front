import React, { Component } from 'react';
import './partials/footer';
import './partials/Header'

 class Attractions extends Component {
  constructor(props){
    super(props);
    this.state={
      attractions:[]
    }
  }
  componentDidMount(){
    axios.get('')
    .then(response => {
      this.setState({

      })
    })
  }
  attractionsList(){
    return this.state.attractions.map(() => {

    })
  }
  render() {
    return (
      <div className='backattractions'>
      <h1>Attractions</h1>
        <div className='filter-buttons'>
        <button className='button-color2'>Mid Tier</button>
        <button className='button-color2'>Good Tier</button>
        <button className='button-color2'>Awesome Tier</button>
        <button className='button-color3'>All Attractions</button>
        </div>
        <div className='attractionscards'>
          {this.attractionsList()}
        </div>
      </div>
    )
  }
}
export default Attractions;


