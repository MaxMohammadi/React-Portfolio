import React from "react";
import Card from "react-bootstrap/Card";
import { SiEthereum } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Max Mohammadi </span>
            from <span className="purple"> San Francisco, Californa. </span>
            <br />I am a Senior, studying Computer Science at California Polytechnic State University, San Luis Obispo.
            <br />
            <br />
            Hobbies
          </p>
          <ul>
            <li className="about-activity">
              <SiEthereum /> Distance Running
            </li>
            <li className="about-activity">
              <SiEthereum /> Mountain Biking
            </li>
            <li className="about-activity">
              <SiEthereum /> Studying the Markets
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I'm just here for the tech, bro!"{" "}
          </p>
          <footer className="blockquote-footer">Max Mohammadi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
