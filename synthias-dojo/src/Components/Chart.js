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
                <h2>{this.props.stats.title}</h2>
                <div className='chartWrapper'>
                    <VictoryPie
                        width={300} height={300}
                        data={[{x: 'hello', y: this.props.stats.amount}, {x:'hi', y: this.props.stats.target}]}
                        innerRadius={120}
                        cornerRadius={30}
                        labels={() => null}
                        colorScale={this.colors[0]}
                    />
                </div>
                <h2>Total: {this.props.stats.amount}</h2>
                <h2>Target: {this.props.stats.target}</h2>
            </div>
        )
    }
}

export default Chart;