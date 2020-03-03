import React, { Component } from 'react'
import FeaturedGif from './FeaturedGif'
import SearchGif from './SearchGif'

class FeaturedGifs extends Component {


    
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
                        this.props.searchResult.slice(0, this.props.visible).map(({ id, images, title, url }, index) => {
                            return (
                                <SearchGif 
                                    key={id}
                                    src={images.original.url}
                                    alt={title}
                                    url={url}
                                />
                            )
                        })
                        )
                    }
                </ul>
            </div>
        )        
    }
}

export default FeaturedGifs;