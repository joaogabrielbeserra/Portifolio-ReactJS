import React, { useState } from "react";
import './qualification.css';
import { FaGraduationCap } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { LuCalendarArrowUp } from "react-icons/lu";
import Certification from "./Certification";


const Qualification = () => {
    const [ToggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualificacoes">
            <h2 className="section__title">Experiências</h2>
            <span className="section__subtitle">Minhas experiências e qualificações</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ToggleState === 2 ?
                        "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                          <GiGymBag className="qualification__title-icon" /> 
                        Profissional
                    </div>
                    <div className={ToggleState === 1 ?
                        "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"} onClick={() => toggleTab(1)}  >
                       <FaGraduationCap className="qualification__title-icon" /> 
                        Institucional
                      
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={ToggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Tecnologia em Análise e Desenvolvimento de Sistemas
                                </h3>
                                <span className="qualification__subtitle">
                                    <a href="https://www.ifspcaraguatatuba.edu.br/cursos/graduacao/tecnologia-em-analise-e-desenvolvimento-de-sistemas" target="_blank" rel="noopener noreferrer">
                                        IFSP - Câmpus Caraguatatuba
                                    </a>
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2024.1 - Presente

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                                <span className="qualification__rounder"></span>
                               
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Técnico em Desenvolvimento Web
                                </h3>
                                <span className="qualification__subtitle">
                                    <a href="https://www.ifspcaraguatatuba.edu.br/cursos/tecnico/tecnico-em-informatica-para-internet" target="_blank" rel="noopener noreferrer">
                                        IFSP - Câmpus Caraguatatuba
                                    </a>
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2023.1 - 2024.2

                                </div>
                            </div>

                        </div>



                    </div>
                    <div className={ToggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Estagiário de Desenvolvimento
                                </h3>
                                <span className="qualification__subtitle">
                                    <a href="https://www.linkedin.com/company/concession%C3%A1ria-tamoios/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                        Concessionária Tamoios
                                    </a>
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2024-05 - Presente

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Estagiário de Infraestrutura
                                </h3>
                                <span className="qualification__subtitle">
                                    <a href="https://www.linkedin.com/company/idealgrupo/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                        Grupo Ideal
                                    </a>
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2024-10 - 2025-04

                                </div>
                            </div>

                        </div>

                     

                    </div>
                </div>

                <div className="certification__carousel">
                    <Certification />
                </div>
            </div>
        </section>
    )
}

export default Qualification;