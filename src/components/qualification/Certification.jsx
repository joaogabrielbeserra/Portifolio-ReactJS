import React from "react";
import {
    FaJava, FaDocker, FaAws, FaTrophy, FaChalkboardTeacher, FaExternalLinkAlt, FaChartBar
} from "react-icons/fa";
import { SiOracle, SiUdemy  } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { BiRocket } from "react-icons/bi";
import "./certification.css";

const certifications = [
    {
        id: 1,
        title: "Formação Java",
        description: "Back-end com Java moderno, APIs REST e ecossistema Spring.",
        institution: "Rocket",
        date: "out/2025",
        tags: ["Java", "Spring Boot", "JPA", "Hibernate", "APIs REST"],
        link: "https://app.rocketseat.com.br/certificates/70c459b8-7580-4c1d-9db2-fc1fff6c22c9",
        Icon: FaJava,
        InstitutionIcon: BiRocket,
    },
    {
        id: 2,
        title: "AWS Cloud Architecting",
        description: "Arquitetura de soluções escaláveis e seguras na nuvem AWS.",
        institution: "AWS",
        date: "dez/2025",
        tags: ["CloudFront", "Cloud Compute"],
        link: "https://www.credly.com/badges/a1d78fe6-2ea3-40eb-b328-c9097f68e288/linked_in_profile",
        Icon: FaAws,
        InstitutionIcon: FaAws,
    },
    {
        id: 3,
        title: "OCI Foundations Associate",
        description: "Fundamentos de infraestrutura na Oracle Cloud.",
        institution: "Oracle",
        date: "mai/2026",
        tags: ["OCI", "Oracle Cloud", "Banco de Dados"],
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9C133364477861D8F7F87C49AC010C3111D9886E29DBE892B8A8627261D7D4D0",
        Icon: SiOracle,
        InstitutionIcon: SiOracle,
    },
    {
        id: 4,
        title: "Acelerando Projetos de Sucesso",
        description: "Gestão ágil de projetos com Scrum e metodologias modernas.",
        institution: "USP",
        date: "out/2025",
        tags: ["Scrum", "Agile", "Gestão de Projetos"],
        link: "https://uspdigital.usp.br/apolo/extDiplomaBaixar.jsp?codpubmtr=D1B1CEAEE7BD&nomsis=Apolo&codund=11&codcurceu=110400146&codedicurceu=25001&numseqofeedi=1",
        Icon: PiCertificateBold,
        InstitutionIcon: PiCertificateBold,
    },
    {
        id: 5,
        title: "Java Completo — POO + Projetos",
        description: "Java do zero ao avançado com projetos reais e banco de dados.",
        institution: "Udemy",
        date: "54.5h",
        tags: ["Java", "POO", "JDBC", "Spring Boot", "MongoDB"],
        link: "https://www.udemy.com/share/101scA3@4K7fSwiqjpDc2O0Hro9S6D-WL1Rh06dduxIfTuDSPrh99_FdE8O8Tf1JP34SkgR03A==/",
        Icon: FaJava,
        InstitutionIcon: SiUdemy,
    },
    {
        id: 6,
        title: "Docker Zero a Profissional",
        description: "Containers, imagens, Docker Compose e práticas de DevOps.",
        institution: "Udemy",
        date: "set/2025",
        tags: ["Docker", "Containers", "Docker Compose", "DevOps"],
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5d72fe45-db04-45c3-89d5-6a314a1838b1.pdf",
        Icon: FaDocker,
        InstitutionIcon: SiUdemy,
    },
    {
        id: 7,
        title: "Palestrante — Minicurso Python",
        description: "Ministrei introdução ao Python para alunos do IFSP.",
        institution: "IFSP",
        date: "ago/2025",
        tags: ["Python", "POO", "Docência"],
        link: "https://suap.ifsp.edu.br/eventos/autenticar_certificado/",
        Icon: FaChalkboardTeacher,
        InstitutionIcon: PiCertificateBold,
    },
    {
        id: 8,
        title: "3º Lugar Hackathon IFSP 2025",
        description: "Solução desenvolvida em equipe em tempo limitado.",
        institution: "IFSP",
        date: "jun/2025",
        tags: ["Trabalho em equipe", "Git", "Inovação"],
        link: "https://www.caraguatatuba.sp.gov.br/pmc/2025/07/caraguatatuba-recebe-1-hackathon-do-litoral-norte-e-premia-estudantes-por-solucoes-tecnologicas-para-turismo-local",
        Icon: FaTrophy,
        InstitutionIcon: PiCertificateBold,
    },
    {
        id: 9,
        title: "Vencedor Hackathon IFSP 2026",
        description: "Desafio da SEDUC Caraguatatuba resolvido em 30h com o projeto Zela+.",
        institution: "IFSP",
        date: "2026",
        tags: ["Trabalho em equipe", "Inovação"],
        link: "https://www.caraguatatuba.sp.gov.br/pmc/2026/07/hackathon-2026-premia-solucoes-inovadoras-para-desafios-da-educacao-em-caraguatatuba/",
        Icon: FaTrophy,
        InstitutionIcon: PiCertificateBold,
    },
    {
        id: 10,
        title: "Business Intelligence",
        description: "Ferramentas e métodos de BI para apoio à tomada de decisão orientada a dados.",
        institution: "FGV ",
        date: "jun/2026",
        tags: ["Business Intelligence", "Dados", "Gestão"],
        link: "https://www.brasilopenbadge.com.br/pages/badge/a830ca4887534aafef6d439326343a07",
        Icon: FaChartBar,
        InstitutionIcon: PiCertificateBold,
    },
];

const Certification = () => {
    return (
        <div className="cert-wrap">
            <h3 className="cert-heading">Certificações e Conquistas</h3>

            <div className="cert-grid">
                {certifications.map(({ id, title, institution, date, tags, link, Icon, InstitutionIcon, highlight }) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cert-card${highlight ? " cert-card--highlight" : ""}`}
                    >
                        <div className="cert-card__icon">
                            <Icon />
                        </div>

                        <h4 className="cert-card__title">{title}</h4>

                        <span className="cert-card__institution">
                            <InstitutionIcon className="cert-card__inst-icon" />
                            {institution}
                            <span className="cert-card__date">· {date}</span>
                        </span>

                        <div className="cert-card__tags">
                            {tags.slice(0, 3).map((t, i) => (
                                <span key={i} className="cert-card__tag">{t}</span>
                            ))}
                        </div>

                        <span className="cert-card__link">
                            Ver certificado <FaExternalLinkAlt />
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Certification;
