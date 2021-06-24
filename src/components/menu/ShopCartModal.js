import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

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
          <ul>
            {
              props.dishes.filter(dish => dish.amount > 0).map(dish => {
                return <li>{dish.amount}x {dish.name} {(dish.amount * dish.price).toFixed(2)} zł</li>
              })
            }
          </ul>

          <p><strong>Total cost: {props.totalCost.toFixed(2)} zł</strong></p>
          
          <p>Delivery addres: <strong>{props.address}</strong></p>
          <div>Delivery time: &nbsp;
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
          </div>

          <p>Payment method: &nbsp;
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
          </p>
          <p>
          <Form.Control placeholder="Order notes" />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Make order</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ShopCartModal;
