import React, { Component } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';

class GifHover extends Component {

    state = {
        show: false
    }

    showModal = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    
    onClose = (e) => {
        console.log(this.props.onClose, this.props.onClose(e))
        this.props.onClose && this.props.onClose(e)
    }


    render() {

        return (
            <div className="icons">

                <a 
                    href={this.props.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faExternalLinkAlt} 
                        className="icon"
                    />
                </a>
                <button
                    onClick={e => {
                        this.showModal()
                    }}
                    >

                    {!this.state.show ? 
                        <FontAwesomeIcon 
                            icon={faEllipsisV} 
                            className="icon"
                        />
                        :
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="icon"
                        />
                    }
                </button>
                <Modal 
                    onClose={this.showModal}
                    show={this.state.show}
                    url={this.props.url}
                >
                </Modal>
            </div>
        )
    }
}

export default GifHover;