import React, { useState } from 'react';

import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { MyVerticallyCenteredModal } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import '../Styles.css';

const ShopCardButton = (props) => {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState("35,90");
  // const [totalPrice, setTotalPrice] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  var ShopCartModal = (props) => {

    const [radioValue, setRadioValue] = useState('1');
    const radios = [
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
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant={radio.value === radioValue ? "primary" : "secondary"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
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

  var orderingButton;
  // if (totalPrice === ""){
  if (props.totalCost === 0){
    // orderingButton = <Button variant="outline-success" size="lg">Wybierz produkty by zamówić</Button>
    orderingButton = <Button variant="light" size="lg">Wybierz produkty by zamówić</Button>
  } else {
    // orderingButton = <Button variant="success" size="lg" onClick={() => setModalShow(true)}>Suma {totalPrice} zł - Zamawiam</Button>
    orderingButton = <Button variant="success" size="lg" onClick={() => setModalShow(true)}>Zamów ({props.totalCost.toFixed(2)} zł)</Button>
  }


  return (
    <div>
      <ShopCartModal
        totalCost={props.totalCost}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="container mb-5 fixed-bottom">
        <div className="col-sd-12 text-center">
          {/* <Button variant="secondary" onClick={() => setTotalPrice("")}>pusto</Button> */}
          {/* <Button variant="secondary" onClick={() => setTotalPrice("15,90")}>cos</Button> */}
          {orderingButton}
        </div>
      </div>
    </div>


  );
}

export default ShopCardButton;
