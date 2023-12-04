import React, { Component } from 'react'

import '../Styles/addattractions.css'

 class Addattractions extends Component {
  render() {
    return (
        <div className='form3'>
        <h1 className='form2'>AddAttraction</h1>
        <br />
        <br />
        <form className='form1'>
        <label>Address:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>Attraction:
          <input type="text" />
        </label>
      </form>
      </div>
    )
  }
}
export default Addattractions;