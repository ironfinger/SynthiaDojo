import '../App.css';

import React, { Component } from 'react';

// Import bootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import My componnents:
import PresetButtonTrain from '../Components/PresetButtonTrain';
import DescriptorPreview from '../Components/DescriptorPreview';

class Train extends Component {
    constructor (props) {
        super (props)

        this.state = { newPresets: ['none'], presetsToTrain: [{name: 'nothing selected'}], placeholders: [0, 0, 0, 0], currentlySelected: 0};
    
        // Bind onclick functions:
        this.newPresetSelect = this.newPresetSelect.bind(this);
        this.selectedPresetSelect = this.selectedPresetSelect.bind(this);
        this.sendToTrain = this.sendToTrain.bind(this);

        // Bind onChange functions:
        this.onDescriptorChange = this.onDescriptorChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/find-new-data').then(res => res.json()).then(data => {
            this.setState({newPresets: data.newPresets});
        });
    }

    newPresetSelect(arg) {
        // Check if theres anything in the presets to train first:
        var currentArray = this.state.presetsToTrain;
        
        currentArray.push(this.state.newPresets[arg]);

        let newPresetsTemp = this.state.newPresets;
        let removedItem = this.state.newPresets.splice(arg, 1);
        
        this.setState({ newPresets: newPresetsTemp, presetsToTrain: currentArray });
    }

    selectedPresetSelect(arg) {
        console.log(arg);
        let placeholders = [3, 0, 0, 0];

        this.setState({ currentlySelected: arg, placeholders: placeholders });
    }

    onDescriptorChange(arg, i) {
        
        //Get the presets:
        let presets = this.state.presetsToTrain
        
        if (i === 0) {
            presets[this.state.currentlySelected].consistency = parseInt(arg.target.value)
        } else if (i === 1) {
            presets[this.state.currentlySelected].brightness = parseInt(arg.target.value)
        } else if (i === 2) {
            presets[this.state.currentlySelected].dynamics = parseInt(arg.target.value)
        } else if (i === 3) {
            presets[this.state.currentlySelected].evolution = parseInt(arg.target.value)
        }

        this.setState({
            presetsToTrain: presets
        });
    }

    sendToTrain() {
        console.log(this.state.presetsToTrain);
    }

    render() {

        let selectedPreset = this.state.presetsToTrain[this.state.currentlySelected]

        return (
            <div className='main'>
                <div className='split leftTrain'>
                    <Container>
                    <h1>New Training Data</h1>
                    {
                        this.state.newPresets.map((x, i) => {
                            return <PresetButtonTrain title={x.name} handler={this.newPresetSelect} index={i} addOr='+'/>
                        })
                    }   
                    </Container> 
                </div>
                <div className='split rightTrain'>
                    <div className='consistencyEntry'>
                        <Container>
                            <Row>
                                <Col xs={6}>
                                    <Button onClick={() => {this.sendToTrain()}} variant="dark">Send to Train</Button>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="dark">Send to Test</Button>
                                </Col>
                            </Row>
                            <Row>
                                <h1>Selected Preset: {this.state.presetsToTrain[this.state.currentlySelected].name}</h1>
                            </Row>
                            <DescriptorPreview 
                                consistency={selectedPreset.consistency}
                                dynamics={selectedPreset.dynamics}
                                evolution={selectedPreset.evolution}
                                brightness={selectedPreset.brightness}
                            />
                            <Row>
                                <Col xs={3}>
                                    <Form.Control className='descriptorInputs' defaultValue={this.state.placeholders[0]} onChange={(e) => {this.onDescriptorChange(e, 0)}}/>
                                </Col>
                                <Col xs={3}>
                                    <Form.Control className='descriptorInputs' defaultValue={this.state.placeholders[1]} onChange={(e) => {this.onDescriptorChange(e, 1)}}/>
                                </Col>
                                <Col xs={3}>
                                    <Form.Control className='descriptorInputs' defaultValue={this.state.placeholders[2]} onChange={(e) => {this.onDescriptorChange(e, 2)}}/>
                                </Col>
                                <Col xs={3}>
                                    <Form.Control className='descriptorInputs' defaultValue={this.state.placeholders[3]} onChange={(e) => {this.onDescriptorChange(e, 3)}}/>
                                </Col>
                            </Row>
                            {
                                this.state.presetsToTrain.map((x, i) => {
                                    return <PresetButtonTrain title={x.name} handler={this.selectedPresetSelect} index={i} />
                                })
                            }
                        </Container>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Train;