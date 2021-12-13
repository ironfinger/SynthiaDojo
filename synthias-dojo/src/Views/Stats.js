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
    Legend,
    CategoryScale,
    LinearScale,
    ArcElement
} from 'chart.js'

import { Radar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

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
            Legend,
            CategoryScale,
            LinearScale,
            ArcElement
        );

        this.colors = {
            consistency: 'rgba(29, 219, 188, 0.2)',
            evolution: 'rgba(137, 72, 219, 0.3)',
            dynamics: 'rgba(219, 83, 29, 0.4)',
            brightnss: 'rgba(219, 216, 39, 0.6)'
        }

        this.data = {
            labels: ['Low', 'Mid', 'High'],
            datasets: [
                {
                    label: 'Consistency',
                    data: [6, 9, 3],
                    backgroundColor: this.colors.consistency,
                    borderColor: 'rgba(29, 219, 188, 1)',
                    color: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Evolution',
                    data: [6, 8, 4],
                    backgroundColor: this.colors.evolution,
                    borderColor: 'rgba(137, 72, 219, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Brightness',
                    data: [6, 5, 5],
                    backgroundColor: this.colors.brightnss,
                    borderColor: 'rgba(219, 216, 39, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Dynamics',
                    data: [6, 6, 3],
                    backgroundColor: this.colors.dynamics,
                    borderColor: 'rgba(219, 83, 29, 1)',
                    borderWidth: 1
                },
            ]
        };

        
        this.edata = {
            labels: ["Dataset 01", "Dataset 02", "Dataset 03", "Dataset 04", "Dataset 05", "Dataset 06"],
            datasets: [
            {
                label: "Mean Squared Error",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: 'rgba(29, 219, 188, 0.7)',
                borderColor: 'rgba(29, 219, 188, 0.7)',
                tension: 0.4
            }
            ]
        };

        this.tData = {
            labels: ["Current", "Target remainder"],
            datasets: [
                {
                    label: 'Total Presets',
                    data: [50, 100],
                    borderColor: ['rgba(255, 206, 86, 0.2)'],
                    backgroundColor: ['rgba(92, 245, 219, 1)', 'rgba(45, 117, 105, 1)'],
                    pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                }
            ]
        }
    }

    componentDidMount() {
        fetch('/api/stats').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({statistics: data});
        });
    }

    render() {
        
        return(
            <Container className='chartContainer' style={{ marginTop: '20px'}}>
                <Row style={{ marginBottom: '20px'}}>
                    <Col>
                        <div className='chartContV2' style={{ height: '100%', width: 'auto' }}>
                            <Line data={this.edata} />
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '5%'}}>
                    <Col className='d-flex justify-content-center'>
                        <div className='chartContV2' style={{ height: '25em', width: '25em'}}>
                            <Radar 
                                data={this.data} 
                                options={{
                                    scales: {
                                        r: {
                                            grid: {
                                                circular: true,
                                                borderWidth: 4,
                                                borderDash: [4, 4, 4, 4],
                                                color: 'rgba(0, 0, 0, 1)',

                                            },
                                            beginAtZero: true,
                                            ticks: {
                                                color: '#000000'
                                            }
                                        }
                                        
                                    },
                                    elements: {
                                        line: {
                                            tension: 0.5,
                                            borderWidth: 3
                                        }
                                    }
                                    
                                }}
                            />
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='chartContV2' style={{ height: '25em', width: '25em' }}>
                            <Doughnut 
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'DoughnutChart',
                                            color: 'blue',
                                            font: {
                                                size: 34
                                            },
                                            padding: {
                                                top: 30,
                                                bottom: 30
                                            },
                                            responsive: true,
                                            animation: {
                                                animateScale: true,
                                            }
                                        }
                                    },
                                    elements: {
                                        line: {
                                            tension: 1
                                        },
                                        
                                    },
                                    
                                }} 
                                data={this.tData} 
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Stats;