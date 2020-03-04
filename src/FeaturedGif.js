import React, { Component } from 'react';
import GifHover from './GifHover'

class FeaturedGif extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this)
        window.matchMedia('(max-width: 850px)').matches?
        this.state = {
            isHovering: true
        }
        :
        this.state = {
            isHovering: false
        }
    }

    handleMouseHover = () => {
        window.matchMedia('(max-width: 850px)').matches?
        this.setState({
            isHovering: true
        })
        :
        this.setState({
            isHovering: !this.state.isHovering
        })
    }

    render() {
        return(
            <li 
                key={this.props.id} 
                className="featuredGif"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
            <img 
                src={this.props.src} 
                alt={this.props.title}
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

export default FeaturedGif;

