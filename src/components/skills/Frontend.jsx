import React from "react";
import { FaReact, FaSass, FaBootstrap, FaVuejs, FaWordpress } from "react-icons/fa";


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
                                <FaReact className="skills__icon" /> ReactJS - &nbsp; <h3 className="skills__subtitle">Proeficiente</h3>
                            </h3>
                            <span className="skills__level">
                                Experiência com diversos projetos Web e Native.

                            </span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaBootstrap className="skills__icon" />    Bootstrap - &nbsp; <h3 className="skills__subtitle">Avançado</h3>
                            </h3>
                            <span className="skills__level">
                                Engatinhei com Bootstrap, usei e conheço muito.

                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaWordpress className="skills__icon" /> Wordpress - &nbsp; <h3 className="skills__subtitle">Básico</h3>
                            </h3>
                            <span className="skills__level">
                                Já trabalhei com alguns projetos.
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaSass className="skills__icon" />    Sass - &nbsp; <h3 className="skills__subtitle">Fundamental</h3>
                            </h3>
                            <span className="skills__level">
                                Trabalhei em projetos Bootstrap para estilização.
                            </span>
                        </div>
                    </div>
                    
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaVuejs className="skills__icon" />    Vue.js - &nbsp; <h3 className="skills__subtitle">Básico</h3>
                            </h3>
                            <span className="skills__level">
                                Estudei já, gostei mas não me aprofundei ao framework.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Frontend;