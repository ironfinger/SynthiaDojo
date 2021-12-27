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

class LfoChart extends Component {
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
            primary: 'rgba(29, 219, 188, 0.4)',
            secondary: 'rgba(137, 72, 219, 0.7)'
        }

        this.lfoValues = [
            'Delay',
            'Fade In',
            'Gate Reset (bool)',
            'Phase',
            'Pulse Width',
            'Speed',
            'Toggle (bool)',
            'Waveshape',
            'sync',
            'sync toggle'
        ];

        this.lfoValuesV2 = [
            'LFODelay',
            'LFOFadeIn',
            'LFOGateReset',
            'LFOPhase',
            'LFOPulseWidth',
            'LFOSpeed',
            'LFOSync',
            'LFOSyncToggle',
            'LFOToggle'
        ];

        this.labels = [
            'Delay',
            'Fade In',
            'Gate Reset',
            'Phase',
            'PulseWidth',
            'Speed',
            'Sync',
            'Sync Toggle',
            'Toggle'
        ]
    }

    prepareData() {
        let signalChain01 = [];
        let signalChain02 = [];
        
        this.lfoValuesV2.map((x) => {
            signalChain01.push(this.props.osc1[x]);
        });

        this.lfoValuesV2.map((x) => {
            signalChain02.push(this.props.osc2[x]);
        });

        return [signalChain01, signalChain02]
    }

    handleBool(arg) {
        if (arg === "true") {
            return 1;
        } else if (arg === "1") {
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
                    borderColor: this.colors.secondary,
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

export default LfoChart;