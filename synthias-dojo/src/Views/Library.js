import { React, Component } from 'react';
import '../App.css';

// Import react bootstrap components:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

// Import my components:
import DescriptorPreview from '../Components/DescriptorPreview'; // This is to show the consistency brightness ect of each preset.
import OscillatorChart from '../Components/OscillatorChart'; // This is to show oscillator data.
import AmpChart from '../Components/AmpChart'; // This is to show amp data.
import Env01Chart from '../Components/Env01Chart'; // This is to show env 01 data.
import Env02Chart from '../Components/Env02Chart'; // This is to show env 02 data.
import FilterChart from '../Components/FilterChart'; // This is to show filter data.
import LfoChart from '../Components/LfoChart'; // This is to show the lfo data.
import GlobalsChart from '../Components/GlobalsChart'; // This is to show the globals data.
import JsonView from '../Components/JsonView'; // This is to show the json data of each preset.

// Import temp json:
import data from '../Data/temp.json' // This is temp data to stop the web app from crashing on load.

class Library extends Component {

    constructor(props) {
        super (props);

        this.state = { 
            AdvFiles: ['none'], 
            presets: [data], 
            currentPreset: 0,
            chartSelector: 0
        };

        this.graphSelectComp = () => {
            return (
                <ul className="FeatureSelector">
                    <li onClick={() => this.featureSelect(0)}>Oscillator</li>
                    <li onClick={() => this.featureSelect(1)}>Amp</li>
                    <li onClick={() => this.featureSelect(2)}>Env 01</li>
                    <li onClick={() => this.featureSelect(3)}>Env 02</li>
                    <li onClick={() => this.featureSelect(4)}>Filter</li>
                    <li onClick={() => this.featureSelect(5)}>LFO</li>
                    <li onClick={() => this.featureSelect(6)}>Globals</li>
                    <li onClick={() => this.featureSelect(7)}>Json</li>
                </ul>
            )
        }

        this.displayPresets = () => {
            return this.state.presets.map((x, i) => {
                if (i === this.state.currentPreset) {
                    return <li className="preset-selected" onClick={() => { this.listClick(i)}}>{x.name}</li>
                }
                return <li className="preset-selector" onClick={() => { this.listClick(i)}}>{x.name}</li>
            })
        }

        this.descriptorComp = () => {
            <DescriptorPreview
                consistency={this.state.presets[this.state.currentPreset].descriptors.consistency}
                dynamics={this.state.presets[this.state.currentPreset].descriptors.dynamics}
                evolution={this.state.presets[this.state.currentPreset].descriptors.evolution}
                brightness={this.state.presets[this.state.currentPreset].descriptors.brightness}
            />
        }
    }

    componentDidMount() { // This is called once the component is loaded into the DOM.
        // Get request the preset data from the api.
        fetch('/api/get-presets').then(res => res.json()).then(data => {
            this.setState({ presets: data.presets})
            console.log(this.state.presets);
        })
    }

    listClick(arg) { // Handle preset selection clicks.
        this.setState(state => ({
            currentPreset: arg
        }));
    }

    displayChart() {
        // Get signal chains:
        let signalChain01 = this.state.presets[this.state.currentPreset].SignalChain1;
        let signalChain02 = this.state.presets[this.state.currentPreset].SignalChain2;
        let selectedPresetName = this.state.presets[this.state.currentPreset].name;

        if (this.state.chartSelector === 0) {
            return <OscillatorChart osc1={signalChain01} osc2={signalChain02} />
        } else if (this.state.chartSelector === 1) {
            return <AmpChart osc1={signalChain01} osc2={signalChain02} /> 
        } else if (this.state.chartSelector === 2) {
            return <Env01Chart osc1={signalChain01['Envelope.0']} osc2={signalChain02['Envelope.0']} />
        } else if (this.state.chartSelector === 3) {
            return <Env01Chart osc1={signalChain01['Envelope.1']} osc2={signalChain02['Envelope.1']} />
        } else if (this.state.chartSelector === 4) {
            return <FilterChart osc1={signalChain01} osc2={signalChain02} />
        } else if (this.state.chartSelector === 5) {
            return <LfoChart osc1={signalChain01} osc2={signalChain02} />
        } else if (this.state.chartSelector === 6) {
            return <GlobalsChart osc1={this.state.presets[this.state.currentPreset].globals} />
        } else if (this.state.chartSelector === 7) {
            return <JsonView name={selectedPresetName} data={this.state.presets[this.state.currentPreset]} />
        }

        return <h1>NULL</h1>
    }

    // Handle chart selection clicks.
    featureSelect(arg) {
        this.setState({ chartSelector: arg });
    }

    NOnrender() {
        console.log(this.state.presets[this.state.currentPreset].descriptors);
        return (
           <div class="main">
                <Row>
                    <div class="top">
                        <Row>
                            <Col lg={4}>
                                <div className="card-left" id="top-card">
                                    <ul>
                                        { this.displayPresets() }
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="card-right" id="top-card">

                                </div>
                            </Col>
                        </Row>
                    </div>

                    
                </Row>
                <Row>
                    <div class="bottom">
                            <Row>
                                <Col lg={4}>
                                    <div className="card-left-bottom">
                                        <h1>Hello</h1>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                </Row>
           </div> 
        )
    }

    render() {
        return (
            <Container fluid className="library">
                <Row>
                    <Col lg={4}>
                        <div className="card-top" id="preset-selector">
                            <ul>
                                { this.displayPresets() }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="card-top" id="top-card">
                            <Row>
                            <Col md={3} lg={7}>
                                {this.displayChart()}

                            </Col>
                            <Col lg={2}>
                                <h1>Hello</h1>
                            </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="card-bottom" id="feature-select-card">
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(0)}>Oscillator</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(1)}>Amp</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(2)}>Env 01</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(3)}>Env 02</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(4)}>Filter</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(5)}>LFO</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(6)}>Globals</Button>
                            <Button className="graph-select-btn" onClick={() => this.featureSelect(7)}>Json</Button>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="card-bottom">
                            <DescriptorPreview
                                consistency={this.state.presets[this.state.currentPreset].descriptors.consistency}
                                dynamics={this.state.presets[this.state.currentPreset].descriptors.dynamics}
                                evolution={this.state.presets[this.state.currentPreset].descriptors.evolution}
                                brightness={this.state.presets[this.state.currentPreset].descriptors.brightness}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Library;