import React, { Component, Fragment } from 'react';
import './sass/App.scss';
import axios from 'axios';
import Form from './Form'
import FeaturedGifs from './FeaturedGifs';
import Footer from './Footer';
import Header from './Header';
import SearchButton from './SearchButton';
import swal from 'sweetalert';

class App extends Component {
  constructor() {
    super();
    this.state = {
      featuredGifs: [],
      userInput: '',
      page: 'trending',
      searchResult: [],
      visible: 6,
      loading: true,
      error: false
    }
    this.getMoreGifs = this.getMoreGifs.bind(this)
  }



getMoreGifs = () => {
    this.setState((prev) => {
        return {visible: prev.visible + 6}
    }) 
}

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    this.state.userInput === ''?
    swal('please enter something to look for!', {
      button: 'fine....'
    })
    :
    this.setState({
      loading: true,
      error: false
    })
    e.preventDefault();
    axios({
      url: 'https://api.giphy.com/v1/gifs/search',
      type: 'GET',
      data: 'json',
      params: {
        api_key: 'IcOIA7uzXjoJB4UpdoRW2d6pCcJlgqzW',
        dataType: 'json',
        q: this.state.userInput,
        lang: 'en',
        limit: 100
      }
    }).then((result) => {
      console.log(this.state.searchResult.length)
      this.setState({
        page: 'search',
        loading: false,
        searchResult: result.data.data,
      }, () => {
        if (this.state.searchResult.length===0) {
          this.setState({
            error: true
          })
        }
      })
    });
  };

  componentDidMount() {
    this.setState({
      loading: true
    })
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
        featuredGifs: result.data.data,
        loading: false
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
          {
            this.state.loading? 
            <div className="lds-circle">
              <div>{/* preloader from loading.io released under CC0 Licence */}</div>
            </div>
            :
            <Fragment>
              <FeaturedGifs 
                page={this.state.page} 
                featuredGifs={this.state.featuredGifs} 
                searchResult={this.state.searchResult}
                visible={this.state.visible}
              />
              {this.state.error? 
              <p>no results found. :c</p>
              :
              <SearchButton 
                page={this.state.page}
                getMoreGifs={this.getMoreGifs}
              />}
            </Fragment>
          }
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
