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
                                <FaReact className="skills__icon" /> ReactJS - &nbsp; <p className="skills__subtitle">Proficiente</p>
                            </h3>
                            <span className="skills__level">
                                Principal framework. Hooks, componentização e projetos Web completos.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaBootstrap className="skills__icon" /> Bootstrap - &nbsp; <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Primeiros projetos, grid, componentes responsivos e customização com SCSS.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiTailwindcss className="skills__icon" /> Tailwind CSS - &nbsp; <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Estilização utilitária em projetos React e TypeScript.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaFigma className="skills__icon" /> Figma - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Prototipação, wireframes e design de interfaces antes do desenvolvimento.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiNextdotjs className="skills__icon" /> Next.js - &nbsp; <p className="skills__subtitle">Fundamental</p>
                            </h3>
                            <span className="skills__level">
                                SSR, SSG e roteamento. Estudando para projetos futuros.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaWordpress className="skills__icon" /> Wordpress - &nbsp; <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Desenvolvimento de plugins e projetos institucionais.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaSass className="skills__icon" /> Sass - &nbsp; <p className="skills__subtitle">Fundamental</p>
                            </h3>
                            <span className="skills__level">
                                Estilização em projetos Bootstrap com variáveis e mixins.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaVuejs className="skills__icon" /> Vue.js - &nbsp; <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Estudei os conceitos principais, reatividade e data binding.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Frontend;