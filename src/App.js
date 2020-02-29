import React, { Component } from 'react';
import './sass/App.scss';
import axios from 'axios';
import Form from './Form'
import FeaturedGifs from './FeaturedGifs';
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      featuredGifs: [],
      userInput: '',
      page: 'trending',
      searchResult: []
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    axios({
      url: 'https://api.giphy.com/v1/gifs/search',
      type: 'GET',
      data: 'json',
      params: {
        api_key: 'IcOIA7uzXjoJB4UpdoRW2d6pCcJlgqzW',
        dataType: 'json',
        q: this.state.userInput,
        lang: 'en'
      }
    }).then((result) => {
      console.log(result.data.data)
      this.setState({
        page: 'search',
        searchResult: result.data.data
      })
    })
  }

  componentDidMount() {
    axios({
      url: 'https://api.giphy.com/v1/gifs/trending',
      type: 'GET',
      responseType: 'json',
      params: {
        api_key: 'IcOIA7uzXjoJB4UpdoRW2d6pCcJlgqzW',
        dataType: 'json',
        lang: 'en'
      }
    }).then((result) => {
      this.setState({
        featuredGifs: result.data.data
      })
    })
  }

  restart = () => {
    this.setState ({
      page: 'trending'
    })
  }

  render() {
    return (
      <div className={`App ${this.state.page}`}>
        <div className="wrapper">
          <Header 
            restart={this.restart}
          />
          <Form 
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <FeaturedGifs 
            page={this.state.page} 
            featuredGifs={this.state.featuredGifs} 
            searchResult={this.state.searchResult}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
