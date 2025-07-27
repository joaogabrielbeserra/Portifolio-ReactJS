import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import ProjectCard from "./ProjectCard";

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
            date: "06/2024",
            type: "Aplicados",
            tech: "Frontend",
            technologies: ["Bootstrap", "JavaScript", "CSS3", "HTML5", "SCSS"],
            skills: ["Bootstrap", "Responsividade", "Manipulação de Array", "JavaScript"],
            situacao: "Um colega precisava apresentar uma solução digital para mapear iniciativas de reciclagem. O projeto também foi usado como prova de conhecimento para eliminar a disciplina de desenvolvimento web 1.",
            tarefa: "Construir uma aplicação one-page que permitisse visualizar, cadastrar e editar iniciativas sustentáveis em um layout responsivo e didático para o público geral.",
            acao: "Projetei o layout usando Bootstrap, SCSS, HTML CSS e Javascript. Criei um CRUD local com JavaScript puro para manipular dados de iniciativas diretamente na interface. Tudo foi desenvolvido em uma semana e entregue em tempo para apresentação. ",
            resultados: "A solução foi bem recebida pelos avaliadores e pelo professor. Meu colega conseguiu nota máxima e eu eliminei a disciplina por proficiência. Foi um exercício importante para consolidar Bootstrap, lógica de CRUD e boas práticas de design responsivo.",
            backgroundUrl: "/assets/frontend-estudo-javascript.png",
            gifUrl: "/assets/frontend-estudo-javascript.gif",
            videoUrl: "https://youtu.be/-d78wj6wEzM",
            siteUrl: "https://portal-coscientizacao-reciclagem-bo.vercel.app/",
            gitHubLink: "https://github.com/JGabrielFBeserra/Portal-Coscientizacao-Reciclagem-Bootstrap.git",
        },
        {
            id: 2,
            title: "Portfolio React",
            date: "07/2025",
            type: "Aplicados",
            tech: "Frontend",
            technologies: ["React", "CSS3", "JavaScript", "Vite"],
            skills: ["React", "Javascript", "Responsividade", "CSS3", "Vite", "Hooks", "Componentização", "Design"],
            situacao: "Precisava criar um portfólio profissional moderno para apresentar meus projetos e habilidades técnicas de forma organizada e que atrativa fosse atrativa para recrutadores.",
            tarefa: "Desenvolver um portfólio responsivo usando React, com componentes reutilizáveis, tema escuro/claro, navegação suave, seções bem estruturadas e código limpo",
            acao: "Construí toda aplicação em 2 semanasa com React e Vite, implementei um sistema de temas, scroll com navegação ativa, componentes modulares e layout responsivo com CSS Grid e variáveis definidas com Root: para exercitar os conhecimentos do CSS3",
            resultados: "Portfolio funcional e moderno que demonstra proficiência em React, boas práticas de desenvolvimento frontend e design responsivo. Facilita a apresentação de projetos para recrutadores, apresentando as informações chaves o mais fácil possível",
            backgroundUrl: "/assets/frontend-aplicado-react.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "https://jgabrielfbeserra.vercel.app/",
            gitHubLink: "https://github.com/JGabrielFBeserra/Portifolio-ReactJS",
        },
        {
            id: 3,
            title: "OnePage Bootstrap",
            date: "05/2024",
            type: "Estudos",
            tech: "Frontend",
            technologies: ["Bootstrap", "SCSS", "Design", "Responsividade"],
            skills: ["Bootstrap", "Responsividade", "Design", "HTML"],
        situacao: "Durante a matéria de inglês, precisava-se criar uma empresa, para inovar, fiz o site da empresa que seria nosso PPT, para exercitar conhecimentos de frontend, praticar e consolidar conhecimentos em Bootstrap para criar um layout responsivo profissional.",
            tarefa: "Desenvolver uma página one-page utilizando Bootstrap para apresentar um site bonito e com as informações da apresentação com design responsivo.",
            acao: "Criei uma aplicação single-page explorando componentes do Bootstrap, sistema de grid, componentes responsivos e customização de estilos.",
            resultados: "Conclui em 3 dias, o projeto consolidou conhecimentos em Bootstrap, a professora gostou da iniciativa inovadora e fiquei bem com os colegas",
            backgroundUrl: "/assets/frontend-estudo-bootstrap.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/OnePage-Bootstrap",
        },
        {
            id: 4,
            title: "API Transações Itaú",
            date: "01/2025",
            type: "Estudos",
            tech: "Backend",
            technologies: ["Java 21", "Spring Boot 3.4.1", "Spring Web", "Spring Actuator", "Lombok", "Swagger/OpenAPI", "Gradle"],
            skills: ["Java", "Spring Boot", "API REST", "Documentação API", "Logs"],
            situacao: "Topei o desafio de programação do Itaú Unibanco que exigia desenvolver uma API REST para processar transações financeiras e calcular estatísticas em tempo real.",
            tarefa: "Implementar uma API REST completa que recebe transações, armazena temporariamente e calcula estatísticas (count, sum, avg, min, max) baseadas em intervalos de tempo configuráveis.",
            acao: "Desenvolvi com Java 21 e Spring Boot 3.4.1, implementei 3 endpoints principais (/transacao POST/DELETE e /estatistica GET), adicionei logs com SLF4J, tratamento de erros customizado, documentação automática com Swagger e validações de negócio.",
            resultados: "API funcional que demonstra domínio completo do ecossistema Spring, boas práticas de desenvolvimento backend, arquitetura limpa com separação de responsabilidades e documentação profissional.",
            backgroundUrl: "/assets/backend-estudo-java.jpg",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/Estudo-TesteDevJuniorJava-BancoItau",
        },
        {
            id: 5,
            title: "Sistema Controle de Ponto",
            date: "05/2025",
            type: "Estudos",
            tech: "Full Stack",
            technologies: ["Node.js", "Express", "Prisma ORM", "MySQL", "JWT", "BCrypt", "JavaScript", "HTML5", "CSS3", "PDFKit", "Zod"],
            skills: ["MVC", "API REST", "JWT", "Javascript", "Prisma"],
            situacao: "Durante a disciplina de Desenvolvimento Web 2, precisei desenvolver um projeto acadêmico completo que demonstrasse domínio de desenvolvimento web full-stack moderno com padrão MVC.",
            tarefa: "Criar um sistema completo de controle de frequência e gestão de funcionários com autenticação JWT, CRUD completo, geração de relatórios PDF.",
            acao: "Desenvolvi backend com Node.js + Express + Prisma ORM + MySQL, implementei autenticação JWT com BCrypt, sistema de logs estruturados, validação com Zod, geração de PDF com PDFKit e JavaScript vanilla.",
            resultados: "Sistema completo aprovado com nota 9/10. Demonstra domínio de arquitetura MVC, segurança robusta, controle de permissões, CRUD completo e boas práticas de desenvolvimento web moderno.",
            backgroundUrl: "/assets/full-stack-estudo-javascript-mvc.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/sistema-controle-ponto",
        },
        {
            id: 6,
            title: "Montador de Lanche - Vue.js",
            date: "",
            type: "Estudos",
            tech: "Frontend",
            technologies: ["Vue.js 2.7.16", "Bootstrap 5.3.3", "JavaScript", "HTML5", "CSS3", "v-model", "Computed Properties", "Data Binding"],
            skills: ["Vue", "JavaScript", "Bootstrap", "Frontend", "Responsivo"],
            situacao: "Para expandir conhecimentos frontend além do React, decidi estudar Vue.js através de um projeto prático que demonstrasse os conceitos fundamentais do framework.",
            tarefa: "Desenvolver uma aplicação web interativa para montar lanches personalizados, implementando sistema reativo, data binding, computed properties e interface responsiva com Bootstrap.",
            acao: "Criei uma página Vue.js que permite aos usuários escolher diferentes tipos de pão, carnes, saladas e molhos, com preview em tempo real do lanche montado através de imagens dinâmicas. Implementei reatividade com v-model, computed properties para lógica de imagens, data binding bidirecional e layout responsivo com Bootstrap.",
            resultados: "Aplicação funcional que demonstra domínio dos conceitos Vue.js: instância Vue, sistema de dados reativo, computed properties, template binding e manipulação de eventos. Interface intuitiva com visualização dinâmica em tempo real dos ingredientes selecionados.",
            backgroundUrl: "/assets/frontend-estudo-vue.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/Estudo-de-VueJS",
        },
        {
            id: 7,
            title: "STUP - Sistema de Transporte Público",
            date: "11/2024",
            type: "Estudos",
            tech: "Full Stack",
            technologies: ["Node.js", "Express.js", "EJS", "Prisma", "MySQL", "Bootstrap 5.3.3", "JavaScript", "HTML5", "CSS3", "Multer", "Chart.js", "Font Awesome", "CORS", "Dotenv"],
            skills: ["Node", "Express", "MySQL", "Bootstrap", "JavaScript"],
            situacao: "Como projeto de conclusão do segundo semestre, criei um sistema completo de transporte público que foi apresentado e funcionava perfeitamente. Porém, na época ainda não utilizava GitHub consistentemente e acabei perdendo o projeto completo.",
            tarefa: "Recriar o sistema STUP do zero, implementando todas as funcionalidades que havia desenvolvido anteriormente: gerenciamento de usuários, cartões, motoristas, ônibus, linhas e dashboard administrativo.",
            acao: "Estou reconstruindo a aplicação full-stack usando Node.js/Express, EJS, Prisma com MySQL e Bootstrap. Já implementei a estrutura base, alguns CRUDs, upload de arquivos com Multer e organização em sprints. O projeto atual no GitHub mostra o progresso da reconstrução, mas ainda não está completo como a versão original.",
            resultados: "Apesar de ter perdido o projeto original completo que me resultou em um 10 na disciplina, a experiência me ensinou a importância do versionamento Git e sua postagem no Github. Estou aplicando esse aprendizado na reconstrução, que demonstra minha capacidade de desenvolvimento full-stack e persistência para recriar soluções complexas.",
            backgroundUrl: "/assets/full-stack-estudo-javascript-mvc2.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/STUP",
        },
        {
            id: 8,
            title: "Leitor de Código de Barras na Tela",
            date: "01/2025",
            type: "Aplicados",
            tech: "Backend",
            technologies: ["Python", "OpenCV", "pyzbar", "pyautogui", "tkinter"],
            skills: ["Python", "Visão Computacional", "Automação", "OCR", "RPA"],
            situacao: "Setor financeiro da empresa lidava com faturas digitais contendo códigos de barras sem números legíveis ou copiáveis, necessitando digitar manualmente números longos e propensos a erros.",
            tarefa: "Desenvolver sistema para ler códigos de barras diretamente da tela do computador e copiar automaticamente para área de transferência, eliminando digitação manual e erros.",
            acao: "Criei aplicação Python com interface transparente usando tkinter, captura de tela com pyautogui, processamento de imagem com OpenCV e decodificação com pyzbar. Implementei hotkey global (z+x+c), seleção visual de área, múltiplas escalas de processamento e sistema robusto de mensagens.",
            resultados: "Sistema funcional que eliminou compra de leitor físico, automatizou processo manual, eliminou erros de digitação e aumentou velocidade de processamento de faturas. Inclui arquivos .bat para instalação e execução simplificada.",
            backgroundUrl: "/assets/backend-aplicado-barcode.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/print-codigodebarras-automation",
        },
        {
            id: 9,
            title: "PDF to Excel Automation",
            date: "05/2025",
            type: "Aplicados",
            tech: "Backend",
            technologies: ["Python", "pdfplumber", "openpyxl", "tkinter", "pyperclip"],
            skills: ["Python", "Automação", "Excel", "PDF", "RPA"],
            situacao: "No setor da engenharia da empresa tinha o processo manual repetitivo de extrair dados de ordens de serviço em PDF e transferir para planilha Excel, isso estava consumindo horas de trabalho e causando erros humanos.",
            tarefa: "Automatizar completamente a extração de dados estruturados de PDFs de ordens de serviço e inserção organizada em planilha Excel, mantendo formatação original.",
            acao: "Desenvolvi script Python usando pdfplumber para extrair tabelas de PDFs, openpyxl para manipular Excel, tkinter para interface de seleção de arquivos. Implementei lógica para processar campos específicos, aplicar formatações automáticas, calcular fórmulas e preservar estilos da planilha.",
            resultados: "Após uma semana de estudo e conversação com os colaboradores, criei o script que processa 120x mais rápido múltiplos PDFs automaticamente, mantém formatação original da planilha, calcula fórmulas automáticas e eliminou completamente o trabalho manual. Inclui tratamento de erros e interface amigável com arquivo .bat para execução.",
            backgroundUrl: "/assets/backend-aplicado-pdf-to-excel.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/PDF-to-Excel-Automation",
        },
        {
            id: 10,
            title: "GLPI Card Export - Extensão Chrome",
            date: "01/2025",
            type: "Aplicados",
            tech: "Frontend",
            technologies: ["JavaScript", "Chrome Extension", "HTML2Canvas", "jsPDF", "PDF.js"],
            skills: ["JavaScript", "Chrome API", "DOM", "PDF", "Automação"],
            situacao: "Analistas de TI perdiam horas extraindo evidências manualmente de chamados GLPI, usando print screen, Word e exportação para PDF em processo demorado e propenso a erros.",
            tarefa: "Desenvolver extensão Chrome para automatizar completamente a geração de PDFs com evidências de chamados GLPI, eliminando processo manual e padronizando documentação.",
            acao: "Criei extensão usando JavaScript puro, Chrome APIs, HTML2Canvas para captura de tela, jsPDF para geração de PDF e PDF.js para processamento de anexos. Implementei interface visual para seleção de cards, detecção automática de tipos de chamado (KCOR/TECSIDEL) e organização cronológica.",
            resultados: "Extensão que reduziu 80% do tempo de documentação, eliminou erros de formatação manual, padronizou documentos automaticamente e aumentou significativamente a produtividade da equipe de TI.",
            backgroundUrl: "/assets/backend-aplicado-glpi-card.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/glpi-.card-body-downloader",
        },
        {
            id: 11,
            title: "Avaliador de Hackathon",
            date: "",
            type: "Aplicados",
            tech: "Full Stack",
            technologies: ["PHP", "WordPress", "MySQL", "Plugin Development"],
            skills: ["PHP", "Wordpress", "Plugin próprio", "HostGator", "MySQL"],
            situacao: "Durante hackathon, era necessário um sistema para avaliadores pontuarem projetos de forma organizada e transparente.",
            tarefa: "Desenvolver plugin WordPress personalizado para permitir avaliação estruturada de projetos de hackathon com diferentes critérios.",
            acao: "Eu e outra colega desenvolvemos o plugin WordPress em PHP com sistema de avaliação customizado, banco de dados para armazenar pontuações e interface administrativa.",
            resultados: "Plugin funcional que organizou processo de avaliação do hackathon, proporcionando transparência e facilidade para avaliadores e organizadores.",
            backgroundUrl: "/assets/full-stack-aplicado-hack.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink  : "",
        },
        {
            id: 12,
            title: "Fatura Extractor Automation",
            date: "07/2025",
            type: "Aplicados",
            tech: "Backend",
            technologies: ["Python", "pdfplumber", "PyPDF2", "openpyxl", "tkinter"],
            skills: ["Python", "PDF", "Automação", "Excel", "OCR"],
            situacao: "Empresa processava manualmente centenas de faturas de energia elétrica mensais, extraindo dados para planilhas, separando canhotos e renomeando arquivos - processo extremamente demorado e propenso a erros.",
            tarefa: "Desenvolver sistema de automação completo para extrair dados de faturas PDF, preencher planilhas automaticamente, separar canhotos individuais e renomear arquivos baseado no conteúdo lido.",
            acao: "Estou desenvolvendo em Python usando pdfplumber para extração de texto, PyPDF2 para separação de páginas, openpyxl para manipulação de planilhas. O projeto ainda está em construção, mas já implementei detecção de múltiplas empresas (CEDRAP, ELEKTRO, EDP) e módulos funcionais para extração e separação.",
            resultados: "Projeto em desenvolvimento com módulos principais definidos: extração inteligente de dados por empresa, separação automática de canhotos, preenchimento de planilhas Excel e sistema de renomeação baseado em OCR. Quando finalizado, eliminará completamente o trabalho manual de processamento de faturas.",
            backgroundUrl: "/assets/backend-aplicado-faturas.png",
            gifUrl: "",
            videoUrl: "",
            siteUrl: "",
            gitHubLink: "https://github.com/JGabrielFBeserra/fatura-extractor-automation",
        }
    ];

    // Filtrar projetos
    const filteredProjects = projects.filter(project => {
        const typeMatch = activeTypeFilter === 'Todos' || project.type === activeTypeFilter;
        const techMatch = activeTechFilter === 'Todos' || project.tech === activeTechFilter;
        return typeMatch && techMatch;
    });

    function getEmbedUrl(videoUrl) {
        if (videoUrl.includes("youtu.be")) { //verifica se é um link curto do youtube
            const id = videoUrl.split("/").pop().split("?")[0]; //se for eu uso o split para pegar o id do video
            return `https://www.youtube.com/embed/${id}`; //retorno com o embed para funcioar no iframe
        }

        if (videoUrl.includes("watch?v=")) { //verifica se é um link longo do youtube
            const id = new URL(videoUrl).searchParams.get("v"); //extraio o id do video
            return `https://www.youtube.com/embed/${id}`; //retorno com o embed para funcioar no iframe
        }

        return videoUrl; 
    }



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
                <div className="project__content" >

                    {filteredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
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
                                <h2 className="project__modal-subtitle">{selectedProject.date}</h2>
                                <p className="project__modal-star"><strong className="project__star-letter">S</strong><span className="project__star-title">ituação:</span> {selectedProject.situacao}</p>
                                <p className="project__modal-star"><strong className="project__star-letter">T</strong><span className="project__star-title">arefa:</span> {selectedProject.tarefa}</p>
                                <p className="project__modal-star"><strong className="project__star-letter">A</strong><span className="project__star-title">ção:</span> {selectedProject.acao}</p>
                                <p className="project__modal-star"><strong className="project__star-letter">R</strong><span className="project__star-title">esultados:</span> {selectedProject.resultados}</p>

                                <div className="project__tech-list">
                                    {selectedProject.skills.map((tech, index) => (
                                        <span key={index} className="project__tech-item">{tech}</span>
                                    ))}
                                </div>
                                <br />
                                {selectedProject.gitHubLink && (
                                    <div className="project__modal-center">
                                        <a
                                            href={selectedProject.gitHubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__modal-link project__modal-link--live"
                                        >
                                            Ver no GitHub
                                        </a>
                                    </div>
                                )}
                              
                                <hr></hr>
                                <br />
                                {selectedProject.videoUrl && (
                                    <div className="project__video-container">
                                        <div className="project__modal-links">
                                            <div className="project__modal-center">
                                                {selectedProject.siteUrl && (
                                                    <a
                                                        href={selectedProject.siteUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project__modal-link project__modal-link--live"
                                                    >
                                                        <FaGithub className="project__link-icon" />
                                                        Ver Projeto ao vivo
                                                        <IoLogoVercel className="project__link-icon" />
                                                    </a>
                                                )}
                                            </div>

                                        </div>
                                        <iframe
                                            className="project__video"
                                            src={getEmbedUrl(selectedProject.videoUrl)}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
}

export default Project;