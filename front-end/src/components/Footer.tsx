//import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="footer fixed-bottom navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
      style={{
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <ul>
            <a href="https://www.instagram.com/" style={{ marginRight: "4px" }}>
              Contact Us
              <br />
              <i
                className="fa-brands fa-instagram fa-xl"
                style={{ marginRight: "10px" }}
              ></i>
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
