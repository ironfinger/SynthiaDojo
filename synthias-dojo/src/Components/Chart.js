import React, { Component } from 'react';

// Import Victory
import { VictoryPie } from 'victory';

class Chart extends Component {
    constructor (props) {
        super (props);
        this.colors = [['#A8FFCA', '#99C1D3']];
    }

    render() {
        return (
            <div className='chartCont'>
                <h2>Chart Title</h2>
                <div className='chartWrapper'>
                    <VictoryPie
                        width={300} height={300}
                        data={this.props.presets}
                        innerRadius={120}
                        cornerRadius={30}
                        labels={() => null}
                        colorScale={this.colors[0]}
                    />
                </div>
                <h2>Totle: 400</h2>
                <h2>Target: 4000</h2>
            </div>
        )
    }
}

export default Chart;