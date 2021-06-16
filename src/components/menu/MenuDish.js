import React, { useEffect, useState } from "react";

import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import '../Styles.css';

const MenuDish = ( props ) => {
  const [count, setCount] = useState(0);

  const plus = <span className="yellow-shadow">➕</span>;
  const minus = <span className="red-shadow">➖</span>;

  const orderingButton = (buttonVariant, buttonContent, tooltipPlacement, tooltipContent, increment) => {
    return (
      <OverlayTrigger
      key={"tt-" + buttonVariant}
      placement={tooltipPlacement}
      overlay={<Tooltip id={"tooltip-" + tooltipPlacement}>{tooltipContent}</Tooltip>}>
        <Button
        onClick={() => {
          setCount(count + increment);
          var total = props.totalCost + increment * props.price;
          var roundedTotal = (Math.round(total * 100) / 100);
          props.setTotalCost(roundedTotal);
        }}
          
        variant={buttonVariant}
        size="sm"
        className="font-weight-bold"
        block>
          {buttonContent}
        </Button>
      </OverlayTrigger>
  )}

  useEffect(() => {
    
  }, []);

  if (count === 0) {
    var addButton = orderingButton("outline-warning", plus, "top", "Click to add the product.", 1);
    var removeButton = "";
  } else {
    var addButton = orderingButton("warning", count, "top", "Click to add the product.", 1);
    var removeButton = orderingButton("outline-danger", minus, "bottom", "Click to remove the product.", -1);
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                <p>{props.description}</p>
                <p className="text-primary font-weight-bold mb-0">{props.price.toFixed(2)} zł</p>
              </Card.Text>
            </Col>
            <Col xs={1} className="p-0">
              <div class="d-flex flex-column">
                {addButton}
                {removeButton}
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default MenuDish;
