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
        
        this.placeholderPreset = {
            name: 'placeholder',
            descriptors: {
                consistency: 24,
                brightness: 10,
                dynamics: 40,
                evolution: 50
            }
        }

        this.state = { newPresets: ['none'], presetsToTrain: [this.placeholderPreset], placeholders: [0, 0, 0, 0], currentlySelected: 0};
    
        // Bind onclick functions:
        this.newPresetSelect = this.newPresetSelect.bind(this);
        this.selectedPresetSelect = this.selectedPresetSelect.bind(this);
        this.sendToTrain = this.sendToTrain.bind(this);

        // Bind onChange functions:
        this.onDescriptorChange = this.onDescriptorChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/find-new-data').then(res => res.json()).then(data => {
            this.setState({newPresets: data.presets});
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

        let currentDescriptors = presets[this.state.currentlySelected].descriptors;

        if (i === 0) {
            presets[this.state.currentlySelected].descriptors.consistency = parseInt(arg.target.value)
        } else if (i === 1) {
            presets[this.state.currentlySelected].descriptors.brightness = parseInt(arg.target.value)
        } else if (i === 2) {
            presets[this.state.currentlySelected].descriptors.dynamics = parseInt(arg.target.value)
        } else if (i === 3) {
            presets[this.state.currentlySelected].descriptors.evolution = parseInt(arg.target.value)
        }

        this.setState({
            presetsToTrain: presets
        });
    }

    sendToTrain() {
        let temp = this.state.presetsToTrain;
        temp.shift();
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ presets: temp})
        }

        fetch('/api/newdata', requestOptions).then(res => res.json()).then(data => console.log(data));
        this.setState({
            presetsToTrain: [this.placeholderPreset]
        })
    }

    render() {

        let selectedPreset = this.state.presetsToTrain[this.state.currentlySelected]
        let selectedDescriptors = selectedPreset.descriptors;
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
                                consistency={selectedDescriptors.consistency}
                                dynamics={selectedDescriptors.dynamics}
                                evolution={selectedDescriptors.evolution}
                                brightness={selectedDescriptors.brightness}
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