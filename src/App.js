import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import TopBar from './components/TopBar';
import Layout from './components/Layout';

import { Container, Row, Col } from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
import RestaurantHeader from './components/RestaurantHeader';
import MenuCategoryNav from './components/MenuCategoryNav';
import MenuList from './components/MenuList';
import Footer from './components/Footer';
import ShopCart from './components/ShopCart';
import MenuWrapper from './components/MenuWrapper';


function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Container>
        <Row>
          <Col>
            <MenuWrapper>
              <RestaurantHeader name="McDonald's" cuisine="Amercian" />
              <MenuCategoryNav />
              <MenuList />
              {/* <ShopCart totalCost={totalCost}/> */}

              {/* <ShopCart /> */}
              <div style={{position: "sticky", bottom: 20}}>
  XDDDDDDDDDDDDDDDDDDD
              </div>
            </MenuWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>

      {/* <Layout>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Layout> */}
    </React.Fragment>
  );
}

export default App;
