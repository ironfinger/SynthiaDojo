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

        this.state = { statistics: [{ title: 'no data', amount: 11, target: 1000}] };
    }

    componentDidMount() {
        fetch('/api/stats').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({statistics: data});
        });
    }

    render() {
        
        return(
            <Container className='chartContainer'>
                <Row>
                    {
                        this.state.statistics.map((stat) => {
                            return (<Col xs={4}><Chart stats={stat} /></Col>)
                        })
                    }
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