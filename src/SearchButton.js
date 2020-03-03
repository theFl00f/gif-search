import React, { Component } from 'react';


class SearchButton extends Component {
    render() {
        return(
            this.props.page === 'search' 
            &&
            <button 
                className="load"
                onClick={this.props.getMoreGifs}
            >
                Load more...
            </button>
        )
    }
}

export default SearchButton;