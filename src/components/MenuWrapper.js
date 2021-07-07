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
  const [phoneNumber, setShoneNumber] = useState();

  const [dishes, setDishes] = useState([
    {id: 1, name: "Zestaw BigMac", price: 20.50, amount: 0},
    {id: 2, name: "WieśMac", price: 15.50, amount: 0},
    {id: 3, name: "Frytki", price: 6.50, amount: 0},
    {id: 4, name: "Coca Cola", price: 5.90, amount: 0},
    {id: 5, name: "McFlary", price: 8.90, amount: 0},
    {id: 6, name: "Shake Waniliowy", price: 7.90, amount: 0},
    {id: 7, name: "Ketchup", price: 0.90, amount: 0},
  ]);

  const deliveryTimeOptions = [
    {id: 1, name: "As soon as possible"},
    {id: 2, name: "+1:00 from now"},
    {id: 3, name: "+1:30 from now"},
    {id: 4, name: "+2:00 from now"},
    {id: 5, name: "+2:30 from now"},
    {id: 6, name: "+3:00 from now"},
  ];
  const [deliveryTime, setDeliveryTime] = useState(deliveryTimeOptions[0]);

  const paymentMethods = [
    { id: 1, name: 'Blik'},
    { id: 2, name: 'Cash'},
    { id: 3, name: 'Card payment'},
  ];
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const [orderNote, setOrderNote] = useState();


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


  const sendOrder = () => {
    var data = {
      // "orderedTime": Date.now,
      "dishes": dishes,
      "address": address,
      // "phoneNumber": phoneNumber,
      "deliveryTime": deliveryTime,
      "paymentMethod": paymentMethod,
      // "orderNote": orderNote,
   }
   console.log(JSON.stringify(data))

   var data2 = {
     "latitude":1.1,
     "longitude":2.2
   }
   console.log(data2)
   console.log(JSON.stringify(data2))

   fetch("https://localhost:44313/api/Mock", {
      method: "POST",
      // mode: "no-cors", // do not use - it causes bad request 415
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      // body:  JSON.stringify(data),
      body: JSON.stringify(data)
   })
   .then(function(response){ 
    return console.log(response);   
   })
  //  .then(function(response){ 
  //   return response.json();   
  //  })
   .then(function(data){ 
   console.log(data)
   });
  }



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
        paymentMethods={paymentMethods}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        deliveryTimeOptions={deliveryTimeOptions}
        deliveryTime={deliveryTime}
        setDeliveryTime={setDeliveryTime}
        onHide={() => setModalShow(false)}
        sendOrder={sendOrder}
      />

      {/* {props.children} */}
    </div>
  );
}

export default MenuWrapper;
