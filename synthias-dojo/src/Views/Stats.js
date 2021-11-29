import '../App.css';
import React, { Component } from 'react';

// Bootstrap Components:
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Chart from '../Components/Chart';

class Stats extends Component {
    constructor (props) {
        super (props);

        this.state = {
            Presets: {
                data: [{x: 'current', y: 400}, {x: 'total', y: 500}]
            }
        }
    }

    render() {
        return(
            <Container className='chartContainer'>
                <Row>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                    <Col xs={4}>
                        <Chart presets={this.state.Presets.data} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={4}><h1>No more charts</h1></Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>
        )
    }
}

export default Stats;