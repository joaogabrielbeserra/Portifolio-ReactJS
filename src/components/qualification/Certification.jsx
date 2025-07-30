import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaCertificate, FaDocker ,   FaJava, FaJs, FaReact, FaNode, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiCisco, SiMeta, SiGithub, SiOracle, SiUdemy } from "react-icons/si";
import { FaFileImport } from "react-icons/fa6";

import './certification.css';

const Certification = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRefs = useRef([]);

    const certifications = [
        {
            id: 1,
            title: "Linguagem Java",
            institution: "Udemy",
            course: "Java COMPLETO Programação Orientada a Objetos + Projetos",
            linkCourse: "https://www.udemy.com/share/101scA3@4K7fSwiqjpDc2O0Hro9S6D-WL1Rh06dduxIfTuDSPrh99_FdE8O8Tf1JP34SkgR03A==/",
            date: "54.5",
            description: "POO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB e +  ",
            link: "#",
            icon: FaJava,
            institutionIcon: SiUdemy
        },
        {
            id: 2,
            title: "Docker",
            institution: "Udemy",
            course: "[2025] DOMINE a tecnologia DOCKER para a criação de Ambientes Locais de Desenvolvimentoava COMPLETO Programação Orientada a Objetos + Projetos",
            linkCourse: "https://www.udemy.com/share/101scA3@4K7fSwiqjpDc2O0Hro9S6D-WL1Rh06dduxIfTuDSPrh99_FdE8O8Tf1JP34SkgR03A==/",
            date: "15",
            description: "Docker, Containers, Dockerfile, Docker Compose, Docker Hub, CLI, Imagens, Volumes, WSL, Linux e DevOps",
            link: "#",
            icon: FaDocker,
            institutionIcon: SiUdemy
        },

    ];

    const maxIndex = certifications.length - 1; // Última certificação (índice 5 para 6 cards)

    const goToPrevious = () => {    
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    const goToNext = () => {
        if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
    };

    const goToCard = (cardIndex) => {
        // Navega diretamente para o card específico
        setCurrentIndex(cardIndex);
    };

    return (
        <div className="">
            <h3 className="certification__title">
                <FaCertificate className="certification__icon" />
                Certificações
            </h3>

            <div className="certification__container">
                {/* Seta Esquerda */}
                {currentIndex > 0 && (
                    <button 
                        className="certification__arrow certification__arrow--left"
                        onClick={goToPrevious}
                    >
                        <FaChevronLeft />
                    </button>
                )}

                {/* Cards visíveis */}
                <div className="certification__viewport">
                    <div 
                        className="certification__track"
                        style={{ transform: `translateX(-${(100 / 6) * currentIndex}%)` }}
                    >
                        {certifications.map((cert, index) => {
                            const IconComponent = cert.icon;
                            const InstitutionIcon = cert.institutionIcon;

                            return (
                                <div 
                                    className="certification__card" 
                                    key={cert.id}
                                    ref={el => cardRefs.current[index] = el}
                                >
                                    <div className="certification__card-header">
                                        <div className="certification__badge">
                                            <IconComponent />
                                            
                                        </div>
                                        <div className="certification__badge-title">
                                            <h4 className="">{cert.title}</h4>
                                        </div>
                                    </div>
                                    <div className="certification__card-content">
                                   
                                        <p className="certification__card-institution">
                                            <InstitutionIcon className="certification__institution-icon" />
                                            <span className="certification__institution-name">
                                            {cert.institution} 

                                            </span>
                                        </p>
                                        <a href={cert.linkCourse} target="_blank" className="certification__card-title"> {cert.course} : ({cert.date} Horas)</a>
                                        
                                        <p className="certification__card-description">- {cert.description}</p>
                                        <div className="certificaton__card-link">
                                            <a 
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certification__card-link"
                                        >
                                            Ver Certificado <FaFileImport className="qualification__card-link-icon"/>
                                        </a>
                                            </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Seta Direita */}
                {currentIndex < maxIndex && (
                    <button 
                        className="certification__arrow certification__arrow--right"
                        onClick={goToNext}
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>

            {/* Indicadores (bolinhas) - uma para cada card */}
            <div className="certification__dots">
                {certifications.map((_, index) => (
                    <button
                        key={index}
                        className={`certification__dot ${
                            index === currentIndex ? 'certification__dot--active' : ''
                        }`}
                        onClick={() => goToCard(index)}
                        aria-label={`Ir para certificação ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certification;
