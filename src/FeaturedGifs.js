import React, { Component } from 'react'


class FeaturedGifs extends Component {
    render() {
        return (
            <ul className="featuredGifs">
                {
                    this.props.page === 'trending' ? 
                    (this.props.featuredGifs.map(({ id, images, title, url }, index) => {
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
                    this.props.searchResult.slice(0, 6).map(({ id, images, title, url }, index) => {
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
        )        
    }
}

export default FeaturedGifs;