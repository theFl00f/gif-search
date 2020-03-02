import React, { Component } from 'react'
import FeaturedGif from './FeaturedGif'
import SearchGif from './SearchGif'

class FeaturedGifs extends Component {

    //put in own component for images?
    // constructor(props) {
    //     super(props);
    //     this.handleMouseHover = this.handleMouseHover.bind(this)
    //     this.state = {
    //         isHovering: false
    //     }
    // }

    // handleMouseHover = () => {
    //     this.setState({
    //         isHovering: !this.state.isHovering
    //     })
    // }

    render() {
        return (
            <div className="featuredGifsContainer">
                <ul className="featuredGifs">
                    {
                        this.props.page === 'trending' ? 
                        ( this.props.featuredGifs.map(({ id, images, title, url }, index) => {
                            return (
                                <FeaturedGif 
                                    key={id}
                                    src={images.original.url}
                                    alt={title}
                                    url={url}
                                />
                            )
                        })
                        ) 
                        :
                        (
                        this.props.searchResult.slice(0, 6).map(({ id, images, title, url }, index) => {
                        return (
                            <SearchGif 
                                key={id}
                                src={images.original.url}
                                alt={title}
                                url={url}
                            />

                            // <li 
                            //     key={id} 
                            //     className="featuredGif"
                            //     onMouseEnter={this.handleMouseHover}
                            //     onMouseLeave={this.handleMouseHover}
                            // >
                            //     <img 
                            //         src={images.original.url} 
                            //         alt={title}
                            //     />
                            //     {
                            //         this.state.isHovering &&
                            //         <GifHover 
                            //             url={url}
                            //         />
                            //     }
                            // </li>
                        )
                        }))
                    }
                </ul>
            </div>
        )        
    }
}

export default FeaturedGifs;