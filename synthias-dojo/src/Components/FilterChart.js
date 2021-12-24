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

class FilterChart extends Component {
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

        this.filterValues = [
            'Cutoff Frequency',
            'Cutoff Mod',
            'Drive',
            'Env Cutoff Mod',
            'Kbd Mod',
            'LFO Cuttoff Mod',
            'Q Factor',
            'Toggle',
            'Type'
        ]

    }

    prepareData() {
        let signalChain01 = [
            this.props.osc1.FilterCutoffFreq,
            this.props.osc1.FilterCutoffMod,
            this.props.osc1.FilterDrive,
            this.props.osc1.FilterEnvCuttoffMod,
            this.props.osc1.FilterKbdMod,
            this.props.osc1.FilterLFOCuttoffMod,
            this.props.osc1.FilterQFactor,
            this.handleBool(this.props.osc1.FilterToggle),
            this.props.osc1.FilterType
        ]

        let signalChain02 = [
            this.props.osc2.FilterCutoffFreq,
            this.props.osc2.FilterCutoffMod,
            this.props.osc2.FilterDrive,
            this.props.osc2.FilterEnvCuttoffMod,
            this.props.osc2.FilterKbdMod,
            this.props.osc2.FilterLFOCuttoffMod,
            this.props.osc2.FilterQFactor,
            this.handleBool(this.props.osc2.FilterToggle),
            this.props.osc2.FilterType
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
            labels: this.filterValues,
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
                <h1>Filter</h1>
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

export default FilterChart;