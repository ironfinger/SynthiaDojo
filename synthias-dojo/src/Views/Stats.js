import '../App.css';
import React, { Component } from 'react';

// Bootstrap Components:
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Chart from '../Components/Chart';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'

import { Radar } from 'react-chartjs-2';

class Stats extends Component {
    constructor (props) {
        super (props);
        this.state = { statistics: [{ title: 'no data', amount: 11, target: 1000}] };

        ChartJS.register(
            RadialLinearScale,
            PointElement,
            LineElement,
            Filler,
            Tooltip,
            Legend
        );

        this.data = {
            labels: ['Consistency Low', 'Consistency High', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [6, 9, 3, 5, 2, 3],
                    backgroundColor: 'rgba(181, 255, 201, 0.7)',
                    color: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                }
            ]
        };
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
                    <Col>
                    <div style={{ height: '30em', width: '30em'}}>
                        <Radar data={this.data} />
                    </div>
                    </Col>
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