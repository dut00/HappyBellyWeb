import React, { useEffect, useState } from "react";

import RestaurantHeader from './menu/RestaurantHeader';
import MenuCategoryNav from './menu/MenuCategoryNav';
import MenuList from './menu/MenuList';
import ShopCartButton from './menu/ShopCartButton';


const MenuWrapper = (props) => {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <div id="aaaaa">
      <RestaurantHeader name="McDonald's" cuisine="Amercian" />
      <MenuCategoryNav />
      <MenuList totalCost={totalCost} setTotalCost={setTotalCost}/>
      <ShopCartButton className="shopcart-btn" totalCost={totalCost}/>
      {/* {props.children} */}
    </div>
  );
}

export default MenuWrapper;
