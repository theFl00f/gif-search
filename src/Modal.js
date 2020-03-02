import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class Modal extends Component {
    render() {
        if (!this.props.show){
            return null
        }


        return(
            
            
            <div className="modal">
                <textarea 
                    name="copyField" 
                    id="copyField" 
                    cols="30" 
                    rows="5"
                    defaultValue={this.props.url}
                >
                </textarea>
                <button>
                    <FontAwesomeIcon 
                        icon={faCopy}
                    />
                </button>
            </div>
        )
    }
}

export default Modal;