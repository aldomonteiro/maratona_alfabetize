import React from "react";
import { Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export default function Rodape() {
  return (
    <footer id="footer">
      <section>
        <h2>Sobre mim</h2>
        <p>
          Sou mãe, professora, pedagoga. Acredito que desenvolver seus filhos em
          casa é tão importante quanto mandá-los para a escola
        </p>
      </section>
      <section>
        <h2>Fale comigo</h2>
        <dl className="alt">
          <dt>Email</dt>
          <dd>
            <a href="#">aline@alinemarius.com.br</a>
          </dd>
        </dl>
        <ul className="icons">
          <li className="icons_li">
            <SocialIcon url="https://www.instagram.com/alinemarius01/" />
            <span className="label">Instagram</span>
          </li>
          <li className="icons_li">
            <SocialIcon url="https://www.youtube.com/c/AlineMarius" />
            <span className="label">Youtube</span>
          </li>
          <li className="icons_li">
            <SocialIcon url="https://www.facebook.com/alinemarius/" />
            <span className="label">Facebook</span>
          </li>
        </ul>
      </section>
    </footer>
  );
}
