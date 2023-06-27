import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-center">
        <FontAwesomeIcon icon={faEnvelope} className="envelope" />
        <h3>muzei.furmanova@yandex.ru</h3>
      </div>
    </footer>
  );
}
