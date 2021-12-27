import { React, Component } from 'react';
import ReactJson from 'react-json-view';

class JsonView extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div className="LibraryChart">
                <h2>{this.props.name}: Json</h2>
                <ReactJson style={{ fontSize: '12px', overflowY: 'scroll', height: '36em'}}src={this.props.data} />
            </div>
        )
    }
}

export default JsonView;