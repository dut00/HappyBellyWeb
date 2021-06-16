import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import TopBar from './components/TopBar';

import { Container, Row, Col } from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
import MenuCategoryNav from './components/menu/MenuCategoryNav';
import MenuList from './components/menu/MenuList';
import Footer from './components/Footer';
import ShopCart from './components/menu/ShopCartButton';
import MenuWrapper from './components/MenuWrapper';


function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Container>
        <Row>
          <Col>
            <MenuWrapper />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
