import React from "react";
import './footer.css';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">João Gabriel</h1>
                <ul className="footer__list">
                    <li><a href="#sobre" className="footer__link">Sobre</a></li>
                    <li><a href="#habilidades" className="footer__link">Habilidades</a></li>
                    <li><a href="#projetos" className="footer__link">Projetos</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://wa.me/5512997215547?text=João%20Gabriel,%20como%20vai%3F" className="footer__social-icon" target="_blank">
                        <i className="uil uil-whatsapp"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-beserra-b352a3305/" className="footer__social-icon" target="_blank">
                        <i className="uil uil-linkedin"></i>

                    </a>
                    <a href="https://github.com/joaogabrielbeserra" className="footer__social-icon" target="_blank">
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://leetcode.com/u/jgabrielfbb/" className="footer__social-icon" target="_blank">
                        <SiLeetcode />
                    </a>
                </div>
                <div className="footer__copy">
                    &#169; João Gabriel. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer;