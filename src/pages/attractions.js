import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from 'react'


const Attractions = props => (
  <tr>
    <td>{props.attractions.title}</td>
    <td>{props.attractions.address}</td>
    <td>{props.attractions.description}</td>
    <td>{props.attractions.ratings}</td>
    <td>
      <Link to={"/edit/"+props.attractions._id}>edit</Link> | <a href="/" onClick={() => { props.deleteAttractions(props.attractions._id) }}>delete</a>
    </td>
  </tr>
)

 class AttractionsList extends Component {
  constructor(props) {
    super(props);

    this.deleteAttractions = this.deleteAttractions.bind(this)

    this.state = {attractions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/' + 'attractions/')
      .then(response => {
        this.setState({ attractions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAttractions(id) {
    axios.delete('http://localhost:5000/' + 'attractions/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      attractions: this.state.attractions.filter(el => el._id !== id)
    })
  }

  attractionsList() {
    return this.state.attractions.map(currentattractions => {
      return <Attractions attractions={currentattractions} deleteattractions={this.deleteattractions} key={currentattractions._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Attractions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Address</th>
              <th>Description</th>
              <th>ratings</th>
            </tr>
          </thead>
          <tbody>
            { this.attractionsList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default AttractionsList