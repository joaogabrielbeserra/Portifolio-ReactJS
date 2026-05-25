import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaCertificate, FaDocker, FaJava, FaJs, FaReact, FaNode, FaGitAlt, FaDatabase, FaAws, FaTrophy, FaChalkboardTeacher } from "react-icons/fa";
import { SiCisco, SiMeta, SiGithub, SiOracle, SiUdemy } from "react-icons/si";
import { FaFileImport } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";

import './certification.css';

const Certification = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRefs = useRef([]);

    const certifications = [
        {
            id: 1,
            title: "Formação Java",
            institution: "Rocketseat",
            course: "Formação Java",
            linkCourse: "https://app.rocketseat.com.br/certificates/70c459b8-7580-4c1d-9db2-fc1fff6c22c9",
            date: "out/2025",
            description: "JPA, Java, Spring Boot, Hibernate, APIs REST e mais competências.",
            link: "https://app.rocketseat.com.br/certificates/70c459b8-7580-4c1d-9db2-fc1fff6c22c9",
            icon: FaJava,
            institutionIcon: FaJava
        },
        {
            id: 2,
            title: "AWS Cloud Architecting",
            institution: "Amazon Web Services (AWS)",
            course: "AWS Academy Graduate - Cloud Architecting - Training Badge",
            linkCourse: "https://www.credly.com/badges/a1d78fe6-2ea3-40eb-b328-c9097f68e288/linked_in_profile",
            date: "dez/2025",
            description: "Amazon S3, Amazon CloudFront, arquitetura em nuvem e mais competências AWS.",
            link: "https://www.credly.com/badges/a1d78fe6-2ea3-40eb-b328-c9097f68e288/linked_in_profile",
            icon: FaAws,
            institutionIcon: FaAws
        },
        {
            id: 3,
            title: "Acelerando Projetos de Sucesso",
            institution: "Universidade de São Paulo",
            course: "Acelerando Projetos de Sucesso",
            linkCourse: "https://uspdigital.usp.br/apolo/extDiplomaBaixar.jsp?codpubmtr=D1B1CEAEE7BD&nomsis=Apolo&codund=11&codcurceu=110400146&codedicurceu=25001&numseqofeedi=1",
            date: "out/2025",
            description: "Scrum, Metodologias Agile, gestão de projetos e mais competências.",
            link: "https://uspdigital.usp.br/apolo/extDiplomaBaixar.jsp?codpubmtr=D1B1CEAEE7BD&nomsis=Apolo&codund=11&codcurceu=110400146&codedicurceu=25001&numseqofeedi=1",
            icon: PiCertificateBold,
            institutionIcon: PiCertificateBold
        },
        {
            id: 4,
            title: "Linguagem Java",
            institution: "Udemy",
            course: "Java COMPLETO Programação Orientada a Objetos + Projetos",
            linkCourse: "https://www.udemy.com/share/101scA3@4K7fSwiqjpDc2O0Hro9S6D-WL1Rh06dduxIfTuDSPrh99_FdE8O8Tf1JP34SkgR03A==/",
            date: "54.5 horas",
            description: "POO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB e mais.",
            link: "https://www.udemy.com/share/101scA3@4K7fSwiqjpDc2O0Hro9S6D-WL1Rh06dduxIfTuDSPrh99_FdE8O8Tf1JP34SkgR03A==/",
            icon: FaJava,
            institutionIcon: SiUdemy
        },
        {
            id: 5,
            title: "Docker Zero a Profissional",
            institution: "Udemy",
            course: "Docker Zero a Profissional para Desenvolvimento Web",
            linkCourse: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5d72fe45-db04-45c3-89d5-6a314a1838b1.pdf",
            date: "set/2025",
            description: "Docker, Containers, Dockerfile, Docker Compose, Docker Hub, CLI, Imagens, Volumes, WSL, Linux e DevOps.",
            link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5d72fe45-db04-45c3-89d5-6a314a1838b1.pdf",
            icon: FaDocker,
            institutionIcon: SiUdemy
        },
        {
            id: 6,
            title: "Palestrante — Minicurso Python",
            institution: "IFSP",
            course: "Palestrante Minicurso - Introdução a Linguagem Python",
            linkCourse: "https://suap.ifsp.edu.br/eventos/autenticar_certificado/",
            date: "ago/2025",
            description: "Docência, Programação Orientada a Objetos, introdução ao Python e mais competências.",
            link: "https://suap.ifsp.edu.br/eventos/autenticar_certificado/",
            icon: FaChalkboardTeacher,
            institutionIcon: PiCertificateBold
        },
        {
            id: 7,
            title: "3º Lugar Hackathon IFSP 2025",
            institution: "IFSP",
            course: "3º Lugar Hackathon IFSP 2025",
            linkCourse: "https://suap.ifsp.edu.br/eventos/autenticar_certificado/?hash=ea4aa44d06a3d714",
            date: "jun/2025",
            description: "Desenvolvimento de solução em equipe, versionamento com Git e inovação tecnológica.",
            link: "https://suap.ifsp.edu.br/eventos/autenticar_certificado/?hash=ea4aa44d06a3d714",
            icon: FaTrophy,
            institutionIcon: PiCertificateBold
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
