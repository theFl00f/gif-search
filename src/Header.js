import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
        <a onClick={ this.props.restart } href="./index.js">
            <h1>Find That GIF!</h1>
        </a>
        )
    }
}

export default Header;