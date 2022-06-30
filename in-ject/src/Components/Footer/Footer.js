import React from "react";
import "./Footer.scss";
import twitter from "../../assets/images/icon-twitter.png";
import fb from "../../assets/images/icon-twitter.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__block">
        <div class="footer__socials">
          <a href="https://instagram.com/nasa/" target="_blank">
            <img
              src="../../assets/images/icon-instagram.png"
              class="footer__socials--logo"
              alt="instagram"
            />
          </a>
          <a href="https://facebook.com/NASA" target="_blank">
            <img
              src="../../assets/images/icon-facebook.png"
              class="footer__socials--logo-mid"
              alt="facebook"
            />
          </a>
          <a href="https://twitter.com/NASA" target="_blank">
            <img
              src={twitter} 
              class="footer__socials--logo"
              alt="twitter"
            />
          </a>
        </div>
      </div>

      <p class="footer__copyright">
        Copyright National Aeronautics and Space Administration © 2022 All
        Rights Reserved
      </p>
      <a href="/">
        <img
          class="footer__logo-bottom"
          src="./assets/images/nasa-logo-web-rgb.png"
          alt=""
        />
      </a>
    </footer>
  );
}

export default Footer;
