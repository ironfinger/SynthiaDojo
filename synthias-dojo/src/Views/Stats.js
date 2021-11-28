import '../App.css';
import React, { Component } from 'react';

// Bootstrap Components:
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { VictoryPie } from 'victory';

class Stats extends Component {
    constructor (props) {
        super (props);

        this.state = {
            Presets: {
                total: 400,
                target: 560
            }
        }
    }

    render() {
        return(
            <Container>
                
            </Container>
        )
    }
}

export default Stats;