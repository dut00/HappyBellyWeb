import React from "react";

import { Nav } from 'react-bootstrap';

const MenuCategoryNav = (props) => {
    return (
        <Nav
            className="mb-3"
            activeKey="/home"
            defaultActiveKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/home">Najpopularniejsze</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Zestawy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Kanapki</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Dodatki</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Napoje</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
            </Nav.Item> */}
        </Nav>
    );
}

export default MenuCategoryNav;
