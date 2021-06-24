import React, { useEffect, useState, forceUpdate } from "react";

import { Button } from 'react-bootstrap';

import RestaurantHeader from './menu/RestaurantHeader';
import MenuCategoryNav from './menu/MenuCategoryNav';
import MenuList from './menu/MenuList';
import ShopCartButton from './menu/ShopCartButton';
import ShopCartModal from './menu/ShopCartModal';


const MenuWrapper = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const [totalCost, setTotalCost] = useState(0);
  const [address, setAddress] = useState("80-404 Gdańsk, Mikołaja Reja 66/6");
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [dishes, setDishes] = useState([
    {id: 1, name: "Zestaw BigMac", price: 20.50, amount: 0},
    {id: 2, name: "WieśMac", price: 15.50, amount: 0},
    {id: 3, name: "Frytki", price: 6.50, amount: 0},
    {id: 4, name: "Coca Cola", price: 5.90, amount: 0},
    {id: 5, name: "McFlary", price: 8.90, amount: 0},
    {id: 6, name: "Shake Waniliowy", price: 7.90, amount: 0},
    {id: 7, name: "Ketchup", price: 0.90, amount: 0},
  ]);

  const addDish = (id) => {
    var indexOfDish = dishes.findIndex(e => e.id === id);
    dishes[indexOfDish].amount++;
    // ugly WA - DOM doesn't rerender because the reference of array doesn't change 
    setDishes(Array.from(dishes));
    countTotalCost();
  };

  const removeDish = (id) => {
    var indexOfDish = dishes.findIndex(e => e.id === id);
    dishes[indexOfDish].amount--;
    // ugly WA - DOM doesn't rerender because the reference of array doesn't change
    setDishes(Array.from(dishes));
    countTotalCost();
  };

  const countTotalCost = () => {
    var totalCost = 0;
    dishes.forEach(e => {
      totalCost += e.amount * e.price;
    });
    setTotalCost(totalCost);
  };

  return (
    <div id="aaaaa">
      <RestaurantHeader name="McDonald's" cuisine="Amercian" />
      <MenuCategoryNav />
      <MenuList
        dishes={dishes}
        addDish={addDish}
        removeDish={removeDish}
      />

      <ShopCartButton
        className="shopcart-btn"
        totalCost={totalCost} 
        setModalShow={setModalShow}
      />

      <ShopCartModal
        dishes={dishes}
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
