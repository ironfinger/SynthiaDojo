import React, { Component } from 'react';

// Import Bootstrap Components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import Victory:
import { VictoryPie } from 'victory';

// Import My components:
import Chart from './Chart';

class DescriptorPreview extends Component {
    constructor (props) {
        super (props);
        this.colors = [['#A8FFCA', '#99C1D3']];

        // We need to calculate the 'total' on the pie chart so that the total is always 100.
    }

    render() {

        this.brightnessTotal = 100 - this.props.brightness;
        this.dynamicsTotal = 100 - this.props.dynamics;
        this.evolutionTotal = 100 - this.props.evolution;
        this.consistencyTotal = 100 - this.props.consistency;

        return (
            <Container>
                <Row>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div className='descriptorChart'>
                            <VictoryPie
                                width={250} height={250}
                                data={[{x: 'hello', y: this.props.consistency}, {x:'total', y: this.consistencyTotal}]}
                                innerRadius={90}
                                cornerRadius={30}
                                labels={() => null}
                                colorScale={this.colors[0]}
                            />
                            <h1>Consistency</h1>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div className='descriptorChart'>
                            <VictoryPie
                                width={250} height={250}
                                data={[{x: 'hello', y: this.props.brightness}, {x:'total', y: this.brightnessTotal}]}
                                innerRadius={90}
                                cornerRadius={30}
                                labels={() => null}
                                colorScale={this.colors[0]}
                            />
                            <h1>Brightness</h1>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div className='descriptorChart'>
                            <VictoryPie
                                width={250} height={250}
                                data={[{x: 'hello', y: this.props.dynamics}, {x:'total', y: this.dynamicsTotal}]}
                                innerRadius={90}
                                cornerRadius={30}
                                labels={() => null}
                                colorScale={this.colors[0]}
                            />
                            <h1>Dynamics</h1>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div className='descriptorChart'>
                            <VictoryPie
                                width={250} height={250}
                                data={[{x: 'hello', y: this.props.evolution}, {x:'total', y: this.evolutionTotal}]}
                                innerRadius={90}
                                cornerRadius={30}
                                labels={() => null}
                                colorScale={this.colors[0]}
                            />
                            <h1>Evolution</h1>
                        </div>
                    </Col>
                    
                </Row>
            </Container>            
        )
    }
}

export default DescriptorPreview;