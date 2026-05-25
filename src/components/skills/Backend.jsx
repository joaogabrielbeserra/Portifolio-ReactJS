import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiTypescript, SiSpringboot } from "react-icons/si";

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
                                <FaJava className="skills__icon" /> Java - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Principal. Foco em Spring Boot com arquitetura em camadas e hexagonal, Spring Security e JWT.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiSpringboot className="skills__icon" /> Spring Boot - &nbsp; <p className="skills__subtitle"> Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                APIs REST, Spring Security, JWT, Swagger e boas práticas de backend.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaPython className="skills__icon" />    Python - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Automação de processos, RPA, OCR e Machine Learning.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiTypescript className="skills__icon" />    TypeScript - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Tipagem estática em projetos Next, React e Node.js.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <IoLogoJavascript className="skills__icon" />    JavaScript - &nbsp; <p className="skills__subtitle">Ba'sico</p>
                            </h3>
                            <span className="skills__level">
                                Node.js, Express e automações com Chrome APIs.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaPhp className="skills__icon" />    PHP - &nbsp; <p className="skills__subtitle">Fundamental</p>
                            </h3>
                            <span className="skills__level">
                                Desenvolvimento de plugins em Wordpress e estudo em lo'gica de programacao.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend;