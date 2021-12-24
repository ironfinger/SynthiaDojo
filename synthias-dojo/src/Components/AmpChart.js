import { React, Component } from 'react';
import FormGroup from 'react-bootstrap/esm/FormGroup';

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
} from 'chart.js'

import { Radar } from 'react-chartjs-2';

class AmpChart extends Component {
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

        this.ampValues = [
            'Kbd Mod',
            'Kbd Pan Mod',
            'LFO Mod',
            'Level',
            'Pan',
            'Pan Mod',
            'Toggle'
        ]

        // 7

    }

    prepareData() {
        let signalChain01 = [
            this.props.osc1.ampKbdMod,
            this.props.osc1.ampKbdPanMod,
            this.props.osc1.ampLFOMod,
            this.props.osc1.ampLevel,
            this.props.osc1.ampPan,
            this.props.osc1.ampPanMod,
            this.handleBool(this.props.osc1.ampToggle)
        ]

        let signalChain02 = [
            this.props.osc2.ampKbdMod,
            this.props.osc2.ampKbdPanMod,
            this.props.osc2.ampLFOMod,
            this.props.osc2.ampLevel,
            this.props.osc2.ampPan,
            this.props.osc2.ampPanMod,
            this.handleBool(this.props.osc2.ampToggle)
        ]

        return [signalChain01, signalChain02];
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
            labels: this.ampValues,
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
                <h1>Amp</h1>
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
        );
    }
}

export default AmpChart;
