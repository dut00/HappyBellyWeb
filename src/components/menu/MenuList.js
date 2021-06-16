import React, { useEffect, useState } from "react";

import MenuDish from './MenuDish';

import { LoremIpsum, Avatar } from "react-lorem-ipsum";


const MenuList = (props) => {
  const [description, setDescription] = useState();

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
        totalCost={props.totalCost}
        setTotalCost={props.setTotalCost} />
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
      </ul>
    </div>
  );
}

export default MenuList;
