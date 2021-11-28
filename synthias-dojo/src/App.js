import logo from './logo.svg';
import './App.css';

// Import react and react Router;
import { React, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/NavBar';

// Import my components:
import Library from './Views/Library';
import Stats from './Views/Stats';


class App extends Component {
  render() {

    let nav = <Navigation />;
    
    return (
      <Router>
        {
          nav // The navigation Bar
        }
        <Routes>
          <Route exact path='/' element={<Library />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
      </Router>
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
          <Nav.Link><Link style={{ textDecoration: 'none', color:'white' }} to='/stats'>Stats</Link></Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
