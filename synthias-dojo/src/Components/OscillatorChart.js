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

        this.oscilatorValues = [
            'Balance',
            'Detune',
            'Env A',
            'Env T',
            'LFO PW',
            'LFO Pitch',
            'Level',
            'Modulation',
            'Octave',
            'PulseWidth',
            'Semi',
            'Sub',
            'Toggle',
            'Waveshape'
        ]
    }

    prepareData() {
        let signalChain01 = [
            this.props.osc1.OscBalance,
            this.props.osc1.OscDetune,
            this.props.osc1.OscEnvAmount,
            this.props.osc1.OscEnvTime,
            this.props.osc1.OscLFOModPW,
            this.props.osc1.OscLFOModPitch,
            this.props.osc1.OscLevel,
            this.props.osc1.OscModulation,
            this.props.osc1.OscOctave,
            this.props.osc1.OscPulseWidth,
            this.props.osc1.OscSemi,
            this.props.osc1.OscSubAmount,
            this.handleBool(this.props.osc1.OscToggle),
            this.props.osc1.OscWaveshape,
        ];
        
        let signalChain02 = [
            this.props.osc2.OscBalance,
            this.props.osc2.OscDetune,
            this.props.osc2.OscEnvAmount,
            this.props.osc2.OscEnvTime,
            this.props.osc2.OscLFOModPW,
            this.props.osc2.OscLFOModPitch,
            this.props.osc2.OscLevel,
            this.props.osc2.OscModulation,
            this.props.osc2.OscOctave,
            this.props.osc2.OscPulseWidth,
            this.props.osc2.OscSemi,
            this.props.osc2.OscSubAmount,
            this.handleBool(this.props.osc2.OscToggle),
            this.props.osc2.OscWaveshape,
        ];

        return [signalChain01, signalChain02];
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
            labels: this.oscilatorValues,
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