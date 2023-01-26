import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "./shared/LeftNav/LeftNav";
import RightNav from "./shared/RightNav/RightNav";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftNav></LeftNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
