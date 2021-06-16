import React, { useEffect, useState } from "react";

const MenuWrapper = (props) => {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <div>
        {props.children}
    </div>
  );
}

export default MenuWrapper;
