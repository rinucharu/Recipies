import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="py-5" style={{backgroundColor:'black'}}>
        <Container>
          <Row>
            <Col>
              <h2>DELICIOUS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                eos iusto corrupti quas sint molestiae repudiandae consectetur
                pariatur! Ex ullam architecto optio itaque beatae facere aliquam
                vel consectetur incidunt? Explicabo.
              </p>
            </Col>
            <Col>
            <h2>
              Quick Links
            </h2>
            <div className="links">
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Image</Link>
                </li>
                <li>
                  <Link>Recipies</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
            </Col>
             <Col>
             <h2>follows us</h2>
             <div className="icon-link">
              <ul>
                <li>
                  <Link><FaFacebookF /></Link>
                </li>
                <li>
                  <Link><FaInstagram /></Link>
                </li>
                <li>
                  <Link><FaTwitter /></Link>
                </li>
                <li>
                  <Link><FaGoogle /></Link>
                </li>
              </ul>
             </div>
             </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
