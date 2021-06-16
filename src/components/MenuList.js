import React, { useEffect, useState } from "react";

// import { MenuDish } from 'react-bootstrap';
import MenuDish from '../components/MenuDish';
import ShopCart from '../components/ShopCart';

import { LoremIpsum, Avatar } from "react-lorem-ipsum";


const MenuList = (props) => {

  const [description, setDescription] = useState();
  const [totalCost, setTotalCost] = useState(0);

  const dishes = [
    ["Zestaw BigMac", 20.50],
    ["WieśMac", 15.50],
    ["Frytki", 6.50],
    ["Coca Cola", 5.90],
    ["Shake Waniliowy", 7.90],
    ["Ketchup", 0.90]
  ];

  var list = dishes.map((dish, idx) => {
    return <li key={idx}>
      <MenuDish
        name={dish[0]}
        price={dish[1]}
        description={description}
        totalCost={totalCost}
        setTotalCost={setTotalCost} />
    </li>
  });

  useEffect(() => {
    setDescription(<LoremIpsum
      avgWordsPerSentence={4}
      avgSentencesPerParagraph={3}
      startWithLoremIpsum="false"
      random="false" />);
  }, []);

  return (
    <div>
      <ul className="list-unstyled">
        {list}
        <li>totalCost: {totalCost}</li>
      </ul>
    </div>
  );
}

export default MenuList;
