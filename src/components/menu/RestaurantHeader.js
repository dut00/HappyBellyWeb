import React from "react";

import '../Styles.css';

import { Jumbotron } from 'react-bootstrap';

const RestaurantHeader = (props) => {
    return (
        <Jumbotron>
            <h1>{props.name}</h1>
            <h6>{props.cuisine} cuisine.</h6>
            <p>⭐⭐⭐⭐<span className="grayed-out">⭐</span> (Opinie 1k)</p>
        </Jumbotron>
    );
}

export default RestaurantHeader;
