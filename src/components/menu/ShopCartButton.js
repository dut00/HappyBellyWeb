import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import ShopCartModal from './ShopCartModal';

import '../Styles.css';

const ShopCardButton = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  var orderingButton;
  if (props.totalCost === 0){
    orderingButton = <Button variant="outline-success" size="lg">Wybierz produkty by zamówić</Button>
    orderingButton = <Button className="bg-white border-secondary" variant="light" size="lg">Wybierz produkty by zamówić</Button>
    orderingButton = <Button variant="dark" size="lg">Wybierz produkty by zamówić</Button>
  } else {
    orderingButton = <Button variant="success" size="lg" onClick={() => setModalShow(true)}>Zamów ({props.totalCost.toFixed(2)} zł)</Button>
  }

  return (
    <div className="shopcart-btn text-center">
      {orderingButton}
      <ShopCartModal
        totalCost={props.totalCost}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ShopCardButton;
