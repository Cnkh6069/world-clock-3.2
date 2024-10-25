import logo from "/logo.png";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Clock from "./Clock";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src={logo} className="logo" alt="Rocket logo" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Calvin's World Clock</h1>
          <p>Best Effort</p>
        </Col>
      </Row>

      <Row className="table-row">
        <Col className="table-cell">Cities</Col>

        <Col className="table-time">TimeZone</Col>
      </Row>
      <Row className="table-row">
        <Col className="table-cell">Asia/Singapore:</Col>
        <Col className="table-time">
          <Clock timeZone="Asia/Singapore" />
        </Col>
      </Row>

      <Row className="table-row">
        <Col className="table-cell">Australia/Canberra:</Col>
        <Col className="table-cell">
          <Clock timeZone="Australia/Canberra" />
        </Col>
      </Row>

      <Row className="table-row">
        <Col className="table-cell">Europe/Berlin:</Col>
        <Col className="table-cell">
          <Clock timeZone="Europe/Berlin" />
        </Col>
      </Row>
    </Container>
  );
}
