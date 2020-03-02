import React, { Component } from 'react';
import GifHover from './GifHover'

class SearchGif extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.state = {
            isHovering: false
        }
    }

    handleMouseHover = () => {
        this.setState({
            isHovering: !this.state.isHovering
        })
    }

    render() {
        return(
            <li 
            key={this.props.key} 
            className="featuredGif"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
        >
            <img 
                src={this.props.src} 
                alt={this.props.alt}
            />
            {
                this.state.isHovering &&
                <GifHover 
                    url={this.props.url}
                />
            }
        </li>
        )
    }
}

export default SearchGif;