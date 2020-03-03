import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            copySuccess: '' 
        }
    }

    copyToClipboard = (e) => {
        this.textarea.select() 
        document.execCommand('copy')
        this.setState({
            copySuccess: 'Copied!'
        })
    }
    
    render() {
        if (!this.props.show){
            return null
        }


        return(
            
            
            <div className="modal">
                <textarea 
                    ref={(textarea) => this.textarea = textarea}
                    name="copyField" 
                    id="copyField" 
                    cols="30" 
                    rows="5"
                    value={this.props.url}
                    readOnly
                >
                </textarea>
                <button
                    onClick={this.copyToClipboard}
                >
                    <FontAwesomeIcon 
                        icon={faCopy}
                    />
                    <p>
                        {this.state.copySuccess}
                    </p>
                </button>
                

            </div>
        )
    }
}

export default Modal;