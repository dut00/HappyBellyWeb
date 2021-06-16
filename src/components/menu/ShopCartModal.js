import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import '../Styles.css';


const ShopCartModal = (props) => {
    const [paymentMethodRadioValue, setPaymentMethodRadioValue] = useState('1');
    const paymentMethod = [
      { name: 'Blik', value: '1' },
      { name: 'Gotówka', value: '2' },
      { name: 'Karta kredytowa', value: '3' },
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
          <h4>Summary</h4>
          <p>2x BigMac  41,00 zł</p>
          <p>2x Frytki  13,00 zł</p>
          <p>1x Ketchup  0,90 zł</p>
          <p><strong>Kwota całkowita: {props.totalCost.toFixed(2)} zł</strong></p>
          
          <p>Delivery addres: 80-404 Gdańsk, Mikołaja Reja 99/9</p>
          <p>Delivery time: ASAP</p>
          <p>Payment method: &nbsp;
            <ButtonGroup toggle>
              {paymentMethod.map((radio, idx) => (
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
          <Form.Control placeholder="Dodatkowe uwagi" />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Make order</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ShopCartModal;
