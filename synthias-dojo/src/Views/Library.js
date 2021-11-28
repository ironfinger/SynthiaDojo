import { React, Component } from 'react';
import '../App.css';
// Import react bootstrap components:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

class Library extends Component {

    constructor(props) {
        super (props);

        this.state = { AdvFiles: ['none'], presets: ['none'] };


    }

    componentDidMount() {
        fetch('/api/get-presets').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({presets: data});
        })
    }

    render() {
        return (
           <div class="main">
               <div class="top">
                    <Container>
                        <Row>
                            <Col>
                                <ul>
                                    <li>Preset 01</li>
                                    <li>Preset 02</li>
                                    <li>Preset 03</li>
                                    <li>Preset 04</li>
                                    <li>Preset 05</li>
                                    <li>Preset 06</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Attibute 01</li>
                                    <li>Attibute 02</li>
                                    <li>Attibute 03</li>
                                    <li>Attibute 04</li>
                                    <li>Attibute 05</li>
                                    <li>Attibute 06</li>
                                    <li>Attibute 07</li>
                                </ul>
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