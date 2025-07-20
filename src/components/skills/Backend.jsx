import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava, FaPhp } from "react-icons/fa";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                Backend
            </h3>
            <div className="skills__box">
                <div className="skills__group">


                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <IoLogoJavascript className="skills__icon" />    JavaScript - &nbsp; <h3 className="skills__subtitle">Experiente</h3>
                            </h3>
                            <span className="skills__level">
                                Principal. Tenho experiência com Node.js e Express.
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaPython className="skills__icon" />    Python - &nbsp; <h3 className="skills__subtitle">Intermediário</h3>
                            </h3>
                            <span className="skills__level">
                                Foco na automatização de processos.
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaJava className="skills__icon" />    Java - &nbsp; <h3 className="skills__subtitle">Fundamental</h3>
                            </h3>
                            <span className="skills__level">
                                Básico, planejo me aprofundar torna-lá minha principal.
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaPhp className="skills__icon" />    PHP - &nbsp; <h3 className="skills__subtitle">Fundamental</h3>
                            </h3>
                            <span className="skills__level">
                                Desenvolvimento de plugins em Wordpress.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Backend;