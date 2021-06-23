import React, { useEffect, useState } from "react";

import MenuDish from './MenuDish';

import { LoremIpsum, Avatar } from "react-lorem-ipsum";


const MenuList = (props) => {
  const [description, setDescription] = useState();

  var list = props.dishes.map((dish, idx) => {
    return <li key={idx}>
      <MenuDish
        name={dish.name}
        price={dish.price}
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
      <ul className="list-unstyled">
        {list}
      </ul>
  );
}

export default MenuList;
