import React from "react";
import { FaReact, FaSass, FaBootstrap, FaVuejs, FaWordpress, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                Frontend
            </h3>
            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaReact className="skills__icon" /> ReactJS <p className="skills__subtitle">Proficiente</p>
                            </h3>
                            <span className="skills__level">
                                Hooks, componentização e projetos web.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaBootstrap className="skills__icon" /> Bootstrap <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Grid, componentes responsivos e SCSS.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiTailwindcss className="skills__icon" /> Tailwind CSS <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Estilização utilitária e rápida.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaFigma className="skills__icon" /> Figma <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Prototipação e wireframes de interfaces.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiNextdotjs className="skills__icon" /> Next.js <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                SSR, SSG e roteamento.
                            </span>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Frontend;