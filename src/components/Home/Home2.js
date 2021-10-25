import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { TiVendorApple } from "react-icons/ti";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <TiVendorApple />  I started programming at a young age when I had the desire to make text message spam bots as well as phone number spoofing systems
              <br />
              <br /> <TiVendorApple /> My favorite languages are
              <i>
                <b className="purple"> Javascript, Python, and Solidity </b>
              </i>
              <br />
              <br /> <TiVendorApple /> My personal interest areas are&nbsp;
              <i>
                <b className="purple"> Cryptocurrency, Machine Learning, Space Exploration, and Education</b>
              </i>
              <br />
              <br /> <TiVendorApple /> I’m currently learning SQL, InfluxDB, Sci-Kit Learn, and Web3 Frameworks. I’m looking to collaborate on open-source DeFi projects on the Celo and Ethereum blockchains
              with <b className="purple">ReactJS</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern Web3 frameworks like
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Truffle and OpenZeppelin</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FOLLOW ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maxmohammadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mohammadimax"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maxwellmohammadi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@maxmohammadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
