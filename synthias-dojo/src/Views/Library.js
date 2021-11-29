import { React, Component } from 'react';
import '../App.css';
// Import react bootstrap components:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

import PresetValue from '../Components/PresetValue';

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
        console.log(this.state.presets[0]);
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
                                </Row>
                            </Col>
                        </Row>
                    </Container>
               </div>
               <div class="bottom">
                    <Container>
                            <Col>
                            
                            </Col>
                            <Col>
                            
                            </Col>
                    </Container>
               </div>
           </div> 
        )
    }
}

export default Library;