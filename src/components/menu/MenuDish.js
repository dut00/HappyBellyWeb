import React, { useEffect, useState } from "react";

import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import '../Styles.css';

const MenuDish = ( props ) => {
  const plus = <span className="yellow-shadow">➕</span>;
  const minus = <span className="red-shadow">➖</span>;

  const orderingButton = (buttonVariant, buttonContent, tooltipPlacement, tooltipContent, addDish) => {
    return (
      <OverlayTrigger
      key={"tt-" + buttonVariant}
      placement={tooltipPlacement}
      overlay={<Tooltip id={"tooltip-" + tooltipPlacement}>{tooltipContent}</Tooltip>}>
        <Button
        onClick={() => {
          if(addDish === true) {
            props.addDish(props.id);
          } else {
            props.removeDish(props.id);
          }
        }}
        variant={buttonVariant}
        size="sm"
        className="font-weight-bold"
        block>
          {buttonContent}
        </Button>
      </OverlayTrigger>
  )}

  if (props.amount === 0) {
    var addButton = orderingButton("outline-warning", plus, "top", "Click to add the product.", true);
    var removeButton = "";
  } else {
    var addButton = orderingButton("warning", props.amount, "top", "Click to add the product.", true);
    var removeButton = orderingButton("outline-danger", minus, "bottom", "Click to remove the product.", false);
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
            <Col xs={2} md={1} className="p-0">
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
