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

        
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div className='descriptorChart'>
                            <VictoryPie
                                width={250} height={250}
                                data={[{x: 'hello', y: this.props.consistency}, {x:'total', y: 100}]}
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
                                data={[{x: 'hello', y: this.props.brightness}, {x:'total', y: 100}]}
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
                                data={[{x: 'hello', y: this.props.dynamics}, {x:'total', y: 100}]}
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
                                data={[{x: 'hello', y: this.props.evolution}, {x:'total', y: 100}]}
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