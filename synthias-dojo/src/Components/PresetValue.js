import React, { Component } from 'react';

class PresetValue extends Component {
    constructor (props) {
        super (props); 
    }

    render() {
        return (
            <div className="preset-value">
                <h1>{this.props.value}</h1>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default PresetValue;