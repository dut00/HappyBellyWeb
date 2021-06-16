import React from "react";

// import { Card } from 'react-bootstrap';

const Footer = (props) => {
    return (
        <footer className="my-5 pt-4 text-muted text-center text-small">
            <p class="mb-1">© 2021 Jakub Dutkiewicz</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="https://www.github.com/dut00" target="_blank">Github</a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/jakubdutkiewicz/" target="_blank">Linkedin</a></li>
                <li class="list-inline-item"><a href="https://www.kudu.dev" target="_blank">Kudu Software</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
