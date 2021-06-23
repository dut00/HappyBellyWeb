import React, { useEffect, useState } from "react";

import RestaurantHeader from './menu/RestaurantHeader';
import MenuCategoryNav from './menu/MenuCategoryNav';
import MenuList from './menu/MenuList';
import ShopCartButton from './menu/ShopCartButton';
import ShopCartModal from './menu/ShopCartModal';


const MenuWrapper = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const [totalCost, setTotalCost] = useState(0);
  const [address, setAddress] = useState("80-404 Gdańsk, Mikołaja Reja 99/9");
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [order, setOrder] = useState(0);

  const order2 = {id: 2, amount: 2};

  const dishes = [
    {id: 1, name: "Zestaw BigMac", price: 20.50},
    {id: 2, name: "WieśMac", price: 15.50},
    {id: 3, name: "Frytki", price: 6.50},
    {id: 4, name: "Coca Cola", price: 5.90},
    {id: 5, name: "McFlary", price: 8.90},
    {id: 6, name: "Shake Waniliowy", price: 7.90},
    {id: 7, name: "Ketchup", price: 0.90},
  ];

  return (
    <div id="aaaaa">
      <RestaurantHeader name="McDonald's" cuisine="Amercian" />
      <MenuCategoryNav />
      <MenuList
        dishes={dishes}
        totalCost={totalCost}
        setTotalCost={setTotalCost}
      />

      <ShopCartButton
        className="shopcart-btn"
        totalCost={totalCost} 
        setModalShow={setModalShow}
      />

      <ShopCartModal
        address={address}
        totalCost={totalCost}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* {props.children} */}
    </div>
  );
}

export default MenuWrapper;
