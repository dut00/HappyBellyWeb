import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

import '../Styles.css';


const ShopCartModal = (props) => {
    const [paymentMethodRadioValue, setPaymentMethodRadioValue] = useState('1');
    const paymentMethods = [
      { name: 'Blik', value: '1', status: '' },
      { name: 'Gotówka', value: '2', status: '' },
      { name: 'Karta kredytowa', value: '3', status: 'disabled'},
    ];


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <table class="table table-sm table-borderless">
                <tbody>
                  {props.dishes.filter(dish => dish.amount > 0).map(dish => {
                      return <tr>
                        <td>{dish.amount}x</td>
                        <td>{dish.name}</td>
                        <td style={{textAlign:"right"}}>{(dish.amount * dish.price).toFixed(2)} zł</td>
                      </tr>
                    })}
                  <tr style={{borderTop:"1px solid lightgray", fontWeight:"bold"}}>
                    {/* <td colspan="2"></td> */}
                    <td></td>
                    <td>Total cost: </td>
                    <td style={{textAlign:"right"}}>{props.totalCost.toFixed(2)} zł</td>
                  </tr>
                </tbody>
              </table>
            </Row>

            <br />
            
            <Row>
              <Col sm={4}>
                <p>Delivery addres:</p>
              </Col>
              <Col sm={8}>
                <Button>{props.address}</Button>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <p>Delivery time:</p>
              </Col>
              <Col sm={8}>
               <DropdownButton id="dropdown-basic-button" className="d-inline-block" title="Dropdown button">
                  <Dropdown.Item href="#/action-1">As soon as possible</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-2">1:00</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">1:30</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2:00</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2:30</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3:00</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3:30</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <p>Payment method:</p>
              </Col>
              <Col sm={8}>
              <ButtonGroup toggle>
                  {paymentMethods.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      variant={radio.value === paymentMethodRadioValue ? "primary" : "secondary"}
                      name="radio"
                      value={radio.value}
                      checked={paymentMethodRadioValue === radio.value}
                      onChange={(e) => setPaymentMethodRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>

            <Row>
            <Form.Control placeholder="Order notes" />
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Make order</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ShopCartModal;
