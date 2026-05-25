import React from "react";
import { SiLeetcode } from "react-icons/si";


const Social = () => {
    return (

        <div className="home__social">
            <a href="https://wa.me/5512997215547?text=João%20Gabriel,%20como%20vai%3F" className="home__social-icon" target="_blank">
                <i className="uil uil-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-beserra-b352a3305/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin"></i>

            </a>
            <a href="https://github.com/joaogabrielbeserra" className="home__social-icon" target="_blank">
                <i className="uil uil-github"></i>
            </a>
            <a href="https://leetcode.com/u/jgabrielfbb/" className="home__social-icon" target="_blank">
                <SiLeetcode />
            </a>



        </div>
    );
}

export default Social;