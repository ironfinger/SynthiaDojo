import React, { Component } from 'react';

// Bootstrap:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PresetButtonTrain extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <div onClick={() => this.props.handler(this.props.index)}className='trainButton'>
                <h2>
                {this.props.title}
                </h2>

            </div>
        )
    }
}

export default PresetButtonTrain;