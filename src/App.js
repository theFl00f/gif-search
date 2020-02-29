import React, { Component } from 'react';
import './sass/App.scss';
import axios from 'axios';

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

  render() {
    return (
      <div className={`App ${this.state.page}`}>
        <div className="wrapper">
          <h1>Find That GIF!</h1>
          <form onSubmit={this.handleFormSubmit} action="submit">
            <label htmlFor="gifSearch">enter a keyword to get started!</label>
            <input onChange={this.handleChange} id="gifSearch" type="text" placeholder="enter keyword here"/>
            <button type="submit">Search!</button>
          </form>
          <ul className="featuredGifs">
            {
              this.state.page === 'trending' ? 
              (this.state.featuredGifs.map(({ id, images, title, url }, index) => {
                  return (
                    <li key={id} className="featuredGif">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={images.original.url} alt={title}/>
                      </a>
                    </li>
                  )
                })
              ) 
              :

              (
                this.state.searchResult.slice(0, 6).map(({ id, images, title, url }, index) => {
                return (
                  <li key={id} className="featuredGif">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={images.original.url} alt={title}/>
                    </a>
                  </li>
                )
              }))
            }
          </ul>
          <footer>
            <p>Celeste Ellerby 2020, powered by GIPHY</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
