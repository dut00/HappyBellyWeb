import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

import '../Styles.css';


const ShopCartModal = (props) => {
    const [paymentMethodRadioValue, setPaymentMethodRadioValue] = useState('1');
    const paymentMethods = [
      { name: 'Blik', value: '1'},
      { name: 'Cash', value: '2'},
      { name: 'Card payment', value: '3'},
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
              <Col>
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
              </Col>
            </Row>

            <Row className="my-1">
              <Col sm={4}>
                Delivery address:
              </Col>
              <Col sm={8}>
                <Button block variant="warning" size="sm">{props.address}</Button>
              </Col>
            </Row>

            <Row className="my-1">
              <Col sm={4}>
                Delivery time:
              </Col>
              <Col sm={8}>
                <Dropdown block>
                  <Dropdown.Toggle block size="sm">
                    {props.deliveryTime.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">As soon as possible</Dropdown.Item>
                    <Dropdown.Divider /> */}
                    {props.deliveryTimeOptions.map(time => {
                      return <Dropdown.Item onClick={() => props.setDeliveryTime(time)}>{time.name}</Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row className="my-1">
              <Col sm={4}>
                Payment method:
              </Col>
              <Col sm={8}>
                <ButtonGroup toggle className="btn-block" size="sm">
                  {props.paymentMethods.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      variant="outline-primary"
                      value={radio.id}
                      checked={props.paymentMethod.id === radio.id}
                      onChange={() => props.setPaymentMethod(radio)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>

            <Row className="my-1">
              <Col sm={4}>
                Order notes:
              </Col>
              <Col sm={8}>
                <Form.Control as="textarea" rows={2} placeholder="e.g. without onion, please" size="sm"/>
              </Col>
            </Row>

          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="light">Back to menu</Button>
          <Button onClick={props.onHide} variant="success">Make order</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ShopCartModal;
