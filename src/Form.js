import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleFormSubmit} action="submit">
                <label htmlFor="gifSearch">enter a keyword to get started!</label>
                <input onChange={this.props.handleChange} id="gifSearch" type="text" placeholder="enter keyword here"/>
                <button type="submit">Search!</button>
            </form>
        )
    }
}

export default Form;