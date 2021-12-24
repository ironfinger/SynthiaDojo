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

class GlobalsChart extends Component {
    constructor (props) {
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
            primary: 'rgba(240, 144, 154, 0.6)',
            secondary: 'rgba(137, 72, 219, 0.7)'
        }

        this.globalsValues = [
            'keyboardDetune',
            'keyboard Priority',
            'keyboard Unison',
            'keyboard Unison Delay',
            'Noise Color',
            'Noise Level',
            'Noise Toggle',
            'Portamento Legato',
            'Portamento Mode',
            'Portamento Time',
            'Portamento Toggle',
            'Unison Toggle',
            'Vibrato Amount',
            'Vibrato Delay',
            'Vibrato Error',
            'Vibrato Fade In',
            'Vibrato Speed',
            'Vibrato Toggle'
        ];
    }

    prepareData() {
        let globals = [
            this.props.globals.keyboardDetune,
            this.props.globals.keyboardPriority,
            this.props.globals.keyboardUnison,
            this.props.globals.keyboardUnisonDelay,
            this.props.globals.noiseColor,
            this.props.globals.noiseLevel,
            this.handleBool(this.props.globals.noiseToggle),
            this.handleBool(this.props.globals.portamentoLegato),
            this.props.globals.portamentoMode,
            this.props.globals.portamentoTime,
            this.handleBool(this.props.globals.portamentoToggle),
            this.handleBool(this.props.globals.unisonToggle),
            this.props.globals.vibratoAmount,
            this.props.globals.vibratoDelay,
            this.props.globals.vibratoError,
            this.props.globals.vibratoFadeIn,
            this.props.globals.vibratoSpeed,
            this.handleBool(this.props.globals.vibratoToggle),

        ]

        return globals
    }

    handleBool(arg) {
        if (arg === "true") {
            return 1;
        } 
        return 0.5;
    }

    render() {
        
        let myData = this.prepareData();

        let graphData = {
            labels: this.globalsValues,
            datasets: [
                {
                    label: 'Globals',
                    data: myData,
                    backgroundColor: this.colors.primary,
                    borderColor: this.colors.primary,
                    color: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1
                }
            ]
        }

        return (
            <div className="LibraryChart">
                <h1>LFO</h1>
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

export default GlobalsChart;