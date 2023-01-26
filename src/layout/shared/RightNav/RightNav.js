import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../Carousel/Carousel";
const RightNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary px-2 my-3">
          <FaGoogle /> Log in with Google{" "}
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Log in with Github{" "}
        </Button>
      </ButtonGroup>
      <div className="social-links mt-4">
        <h3>Find Us</h3>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaGoogle /> Google
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaLinkedin /> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaYoutube /> Youtube
          </ListGroup.Item>
        </ListGroup>
        <div className="brandCarousel">
          <BrandCarousel></BrandCarousel>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
