import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiDotnet } from "react-icons/si";

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
                                <FaJava className="skills__icon" /> Java <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Spring Boot, arquitetura em camadas e JWT.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiSpringboot className="skills__icon" /> Spring Boot <p className="skills__subtitle"> Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                APIs REST, Spring Security e JWT.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaPython className="skills__icon" />    Python <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Automação, RPA, OCR e Machine Learning.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiTypescript className="skills__icon" />    TypeScript <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Tipagem estática em Next, React e Node.js.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <IoLogoJavascript className="skills__icon" />    JavaScript <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Node.js, Express e automações web.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiDotnet className="skills__icon" />    .NET <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                C# e ASP.NET Core em APIs REST.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend;