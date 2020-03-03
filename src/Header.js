import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
        <button 
            className="header"
            onClick={this.props.restart}
        >
            <h1>Find That GIF!</h1>
        </button>
        )
    }
}

export default Header;