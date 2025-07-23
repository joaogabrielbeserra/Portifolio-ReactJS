import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";  
import './project.css';

const Project = () => {
    // Estados para os filtros
    const [activeTypeFilter, setActiveTypeFilter] = useState('Todos');
    const [activeTechFilter, setActiveTechFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);

    // Dados dos projetos
const projects = [
    {
        id: 1,
        title: "OnePage Bootstrap",
        type: "Aplicados",
        tech: "Frontend",
        technologies: ["Bootstrap", "JavaScript", "CSS3", "HTML5"],
        skills: ["Design", "Responsividade", "Manipulação de Array"],
        description: "",
        backgroundImage: "/src/assets/frontend-estudo-javascript.png",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    },
    {
        id: 2,
        title: "Portfolio React",
        type: "Aplicados",
        tech: "Frontend",
        technologies: ["React", "CSS3", "JavaScript", "Vite"],
        skills: ["Componentes", "Hooks", "Responsividade"],
        description: "",
        backgroundImage: "/src/assets/frontend-aplicado-react.png",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    },
    {
        id: 3,
        title: "OnePage Bootstrap",
        type: "Estudos",
        tech: "Frontend",
        technologies: ["Bootstrap", "Responsividade", "Design"],
        skills: ["Bootstrap", "Responsividade", "Design"],
        description: "",
        backgroundImage: "/src/assets/frontend-estudo-bootstrap.png",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    },
    {
        id: 4,
        title: "Desafio DevJava Itaú",
        type: "Estudos",
        tech: "Backend",
        technologies: ["Java", "Spring Boot", "MySQL", "API"],
        skills: ["Java", "CRUD", "POO"],
        description: "",
        backgroundImage: "/src/assets/backend-estudo-java.jpg",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    },
    {
        id: 5,
        title: "MVC Relógio Ponto",
        type: "Estudos",
        tech: "Full Stack",
        technologies: ["JavaScript", "MVC", "API", "Bootstrap"],
        skills: ["MVC", "API", "JWT"],
        description: "",
        backgroundImage: "/src/assets/full-stack-estudo-javascript-mvc.png",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    },
    {
        id: 6,
        title: "Monta Lanche VueJS",
        type: "Estudos",
        tech: "Frontend",
        technologies: ["Vue.js", "JavaScript", "CSS3", "API"],
        skills: ["Reatividade", "Data-Binding", "Computed"],
        description: "",
        backgroundImage: "/src/assets/frontend-estudo-vue.png",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    },
    {
        id: 7,
        title: "MVC STUP",
        type: "Estudos",
        tech: "Full Stack",
        technologies: ["JavaScript", "MVC", "MySQL", "Bootstrap"],
        skills: ["MVC", "MySQL", "API", "Bootstrap"],
        description: "",
        backgroundImage: "/src/assets/full-stack-estudo-javascript-mvc2.png",
        videoUrl: "",
        liveLink: "",
        linkedinPost: "",
        impact: ""
    }
];

    // Filtrar projetos
    const filteredProjects = projects.filter(project => {
        const typeMatch = activeTypeFilter === 'Todos' || project.type === activeTypeFilter;
        const techMatch = activeTechFilter === 'Todos' || project.tech === activeTechFilter;
        return typeMatch && techMatch;
    });

    return (
        <section className="project section" id="projetos">
            <h2 className="section__title">Projetos</h2>
            <span className="section__subtitle">Projetos/Estudos mais recentes.</span>
            
            <div className="project__container container grid">
                <div className="project__header">
                    <div className="project__type-project">
                        {['Aplicados', 'Todos', 'Estudos'].map(type => (
                            <button
                                key={type}
                                className={`project__filter-btn ${activeTypeFilter === type ? 'button button--flex' : 'project__filter-btn--inactive '}`}
                                onClick={() => setActiveTypeFilter(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <hr />
                    <div className="project__type-tecnology">
                        {['Todos', 'Full Stack', 'Backend', 'Frontend'].map(tech => (
                            <button
                                key={tech}
                                className={`project__filter-btn ${activeTechFilter === tech ? 'button button--flex' : 'project__filter-btn--inactive'}`}
                                onClick={() => setActiveTechFilter(tech)}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="project__content">
                    {filteredProjects.map(project => (
                        <div 
                            key={project.id}
                            className="project__box"
                            style={{ backgroundImage: `url(${project.backgroundImage})` }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project__box-overlay">
                                <div className="project__box-view">

                                <h3 className="project__box-title">{project.title}</h3>
                                </div>
                                <div className="project__box-tags">
                                    <span className="project__tag project__tag--type">{project.type}</span>
                                    <span className="project__tag project__tag--tech">{project.tech}</span>
                                </div>
                                <div className="project__box-hover-content">
                                    <ul className="project__box-skills">
                                        {project.skills.slice(0, 4).map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                    <p className="project__box-cta">Ver detalhes</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="project__modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="project__modal" onClick={(e) => e.stopPropagation()}>
                            <button className="project__modal-close" onClick={() => setSelectedProject(null)}>
                                <i className="uil uil-times"></i>
                            </button>
                            
                            <div className="project__modal-content">
                                <h2 className="project__modal-title">{selectedProject.title}</h2>
                                
                                {/* Vídeo - só carrega quando o modal abrir */}
                                {selectedProject.videoUrl && (
                                    <div className="project__video-container">
                                        <iframe
                                            src={selectedProject.videoUrl}
                                            title={`Vídeo do projeto ${selectedProject.title}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                )}
                                
                                <p className="project__modal-description">{selectedProject.description}</p>
                                
                                <div className="project__modal-links">
                                    {selectedProject.linkedinPost && (
                                        <a 
                                            href={selectedProject.linkedinPost} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project__modal-link project__modal-link--linkedin"
                                        >
                                            <i className="uil uil-linkedin"></i>
                                            Ver no LinkedIn
                                        </a>
                                    )}
                                    
                                    {selectedProject.liveLink && (
                                        <a 
                                            href={selectedProject.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project__modal-link project__modal-link--live"
                                        >
                                            <FaGithub />
                                            Ver Projeto
                                        </a>
                                    )}
                                </div>
                                
                                <div className="project__tech-list">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span key={index} className="project__tech-item">{tech}</span>
                                    ))}
                                </div>
                                
                                <p className="project__modal-impact">{selectedProject.impact}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Project;