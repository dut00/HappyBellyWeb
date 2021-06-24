import React, { useEffect, useState } from "react";

import MenuDish from './MenuDish';

import { LoremIpsum, Avatar } from "react-lorem-ipsum";


const MenuList = (props) => {
  const [description, setDescription] = useState();

  var list = props.dishes.map((dish, idx) => {
    return <li key={idx}>
      <MenuDish
        id={dish.id}
        name={dish.name}
        price={dish.price}
        amount={dish.amount}

        addDish={props.addDish}
        removeDish={props.removeDish}

        description={description} />
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
