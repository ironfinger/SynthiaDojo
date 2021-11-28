import logo from './logo.svg';
import './App.css';

// Import react and react Router;
import { React, Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/NavBar';
import Switch from 'react-bootstrap/esm/Switch';

// Import my components:
import Library from './Views/Library';

class App extends Component {
  render() {

    let nav = <Navigation />;
    
    return (
    <div>
      {
        nav
      }
      <Library />
    </ div>
    )
  }
}

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
        SynthiaDojo: Library
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Item>
          <Nav.Link>Design</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Train</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Library</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Stats</Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
