import React, { Component } from 'react';

// Import Victory
import { VictoryPie } from 'victory';

class Chart extends Component {
    constructor (props) {
        super (props);

    }

    render() {
        return (
            <div className='chartCont'>
                <VictoryPie
                    width={300} height={300}
                    data={this.props.presets}
                    innerRadius={120}
                />
            </div>
        )
    }
}

export default Chart;