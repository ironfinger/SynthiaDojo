import { React, Component } from 'react';
import '../App.css';
// Import react bootstrap components:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

import PresetValue from '../Components/PresetValue';
import DescriptorPreview from '../Components/DescriptorPreview';

class Library extends Component {

    constructor(props) {
        super (props);

        this.state = { AdvFiles: ['none'], presets: ['none'], currentPreset: 0 };


    }

    componentDidMount() {
        fetch('/api/get-presets').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({presets: data.presets});
        })
    }

    listClick(arg) {
        this.setState(state => ({
            currentPreset: arg
        }));
    }

    render() {
        
        return (
           <div class="main">
               <div class="top">
                    <Container>
                        <Row>
                            <Col>
                                <div className="top-left">
                                    <ul>
                                        {
                                            this.state.presets.map((x, i) => {
                                                return <li className="preset-selector" onClick={() => { this.listClick(i)}}>{x.name}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Volume'   
                                            value={this.state.presets[this.state.currentPreset].volume}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc A Toggle'   
                                            value={this.state.presets[this.state.currentPreset].OscToggle01}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc A Waveshape'   
                                            value={this.state.presets[this.state.currentPreset].OscWaveshape01}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc A Octave'   
                                            value={this.state.presets[this.state.currentPreset].OscOctave01}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc A Semi'   
                                            value={this.state.presets[this.state.currentPreset].OscSemi01}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc A Env Time'   
                                            value={this.state.presets[this.state.currentPreset].OsvEnvT01}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc B Toggle'   
                                            value={this.state.presets[this.state.currentPreset].OscToggle02}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc B Waveshape'   
                                            value={this.state.presets[this.state.currentPreset].OscWaveshape02}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc B Octave'   
                                            value={this.state.presets[this.state.currentPreset].OscOctave02}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc B Semi'   
                                            value={this.state.presets[this.state.currentPreset].OscSemi02}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <PresetValue 
                                            name='Osc B Env Time'   
                                            value={this.state.presets[this.state.currentPreset].OscEnvT02}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
               </div>
               <div class="bottom">
                    <DescriptorPreview
                        consistency={this.state.presets[this.state.currentPreset].consistency}
                        dynamics={this.state.presets[this.state.currentPreset].dynamics}
                        evolution={this.state.presets[this.state.currentPreset].evolution}
                        brightness={this.state.presets[this.state.currentPreset].brightness}
                    />
               </div>
           </div> 
        )
    }
}

export default Library;