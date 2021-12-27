import { React, Component } from 'react';

// Import ChartJS:
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
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

class OscillatorChart extends Component {
    constructor(props) {
        super (props);

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
            primary: 'rgba(29, 219, 188, 0.4)',
            secondary: 'rgba(137, 72, 219, 0.7)'
        }

        this.oscillatorValuesV2 = [
            'OscillatorToggle',
            'OscillatorWaveShape',
            'OscillatorOct',
            'OscillatorSemi',
            'OscillatorMode',
            'OscillatorEnvTime',
            'OscillatorDetune',
            'OscillatorModulation1',
            'OscillatorPulseWidth',
            'OscillatorSubAmount',
            'OscillatorBalance',
            'OscillatorEnvAmount',
            'OscillatorLFOModPW',
            'OscillatorLevel'
        ]

        this.labels = [
            'Toggle',
            'Waveshape',
            'Octave',
            'Semi',
            'Mode',
            'Env Time',
            'Detune',
            'Modulation1',
            'PulseWidth',
            'Sub Amount',
            'Balance',
            'Env Amount',
            'LFO Mod PW',
            'Level'
        ]

        // this.oscillatorValuesV2 = [
        //     'OscillatorToggle',
        //     'OscillatorWaveShape',
        //     'OscillatorOct',
        //     'OscillatorOctRelativePosition',
        //     'OscillatorSemi',
        //     'OscillatorSemiRelativePosition',
        //     'OscillatorMode',
        //     'OscillatorEnvTime',
        //     'OscillatorDetune',
        //     'OscillatorModulation1',
        //     'OscillatorPulseWidth',
        //     'OscillatorSubAmount',
        //     'OscillatorBalance',
        //     'OscillatorEnvAmount',
        //     'OscillatorLFOModPW',
        //     'OscillatorLevel'
        // ]
    }

    prepareData() {

        let signalChain1 = [];
        let signalChain2 = [];

        this.oscillatorValuesV2.map((x) => {
            signalChain1.push(this.props.osc1[x]);
        });

        this.oscillatorValuesV2.map((x) => {
            signalChain2.push(this.props.osc2[x]);
        });
        
        let myData = [signalChain1, signalChain2]
        return myData;
    }

    // This is to handle preset values which are represented by either a true or false.
    handleBool(arg) {
        if (arg === "true") {
            return 1;
        } 
        return 0.5;
    }

    render() {
        
        let myData = this.prepareData();

        let graphData = {
            labels: this.labels,
            datasets: [
                {
                    label: 'Signal Chain 01',
                    data: myData[0],
                    backgroundColor: this.colors.primary,
                    borderColor: this.colors.primary,
                    color: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Signal Chain 02',
                    data: myData[1],
                    backgroundColor: this.colors.secondary,
                    borderColor: this.colors.seconday,
                    color: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1
                },
            ]
        }

        return (
            <div className="LibraryChart">
                <h1>OSC</h1>
                <Radar 
                    data={graphData} 
                    options={{
                        scales: {
                            r: {
                                grid: {
                                    circular: true,
                                    borderWidth: 4,
                                    borderDash: [4, 4, 4, 4],
                                    color: 'rgba(255, 255, 255, 1)',

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
        )
    }
}

export default OscillatorChart;