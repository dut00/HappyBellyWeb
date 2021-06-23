import React from 'react';

import { Button } from 'react-bootstrap';

// import '../Styles.css';

const ShopCardButton = (props) => {
  var orderingButton;
  
  if (props.totalCost === 0){
    orderingButton = <Button variant="dark" size="lg">Wybierz produkty by zamówić</Button>
  } else {
    orderingButton = <Button variant="success" size="lg" onClick={() => props.setModalShow(true)}>Zamów ({props.totalCost.toFixed(2)} zł)</Button>
  }

  return (
    <div className="shopcart-btn text-center">
      {orderingButton}
    </div>
  );
}

export default ShopCardButton;
