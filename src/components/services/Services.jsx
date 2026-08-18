import React, {useState} from "react";
import './services.css';
import { FaArrowRight, FaCheckCircle, FaChevronDown, FaRegQuestionCircle, FaRobot, FaMobileAlt, FaShoppingCart, FaBullhorn } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [faqOpen, setFaqOpen] = useState(0);
    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? -1 : index);
    }

    const faqs = [
        {
            question: "Quais serviços você oferece?",
            answer: "Ofereço desenvolvimento de sites e aplicações web personalizadas, do frontend ao backend, incluindo sistemas de gestão, APIs e integração com bancos de dados."
        },
        {
            question: "Qual é o seu processo de trabalho?",
            answer: "Começo entendendo a necessidade do projeto, faço o planejamento das telas e da arquitetura, desenvolvo em etapas com entregas frequentes e ajusto conforme o seu feedback."
        },
        {
            question: "Quanto tempo leva para concluir um projeto?",
            answer: "Varia conforme a complexidade, mas projetos simples costumam levar de 1 a 3 semanas, enquanto sistemas mais completos podem levar de 1 a 2 meses."
        },
        {
            question: "Como você garante a qualidade do seu trabalho?",
            answer: "Sigo boas práticas de código, testo cada funcionalidade antes da entrega e mantenho comunicação constante para alinhar expectativas durante todo o projeto."
        },
        {
            question: "Qual é o custo dos seus serviços?",
            answer: "O valor depende do escopo e da complexidade do projeto. Entre em contato para conversarmos sobre sua ideia e eu passo um orçamento personalizado."
        }
    ]

    const services = [
        {
            id: 1,
            title: "Sistemas de Gestão",
            icon: MdDashboard,
            modalTitle: "Sistemas de Gestão",
            modalDescription: "Sistemas internos para organizar processos, estoque, pedidos e equipes, com dashboards administrativos completos.",
            servicesList: [
                "Dashboards administrativos e relatórios",
                "Controle de estoque e catálogo",
                "Portais internos para colaboradores",
                "Totens de autoatendimento",
                "Controle de acesso por perfil de usuário"
            ]
        },
        {
            id: 2,
            title: "Automação de Processos",
            icon: FaRobot,
            modalTitle: "Automação de Processos",
            modalDescription: "Automatizo tarefas manuais e repetitivas, integrando sistemas e eliminando horas de trabalho operacional.",
            servicesList: [
                "Robôs de extração de dados (RPA)",
                "Leitura automática de PDFs e planilhas",
                "Integração entre sistemas e APIs",
                "Relatórios gerados automaticamente",
                "Redução de tarefas manuais no dia a dia"
            ]
        },
        {
            id: 3,
            title: "Aplicativos Mobile",
            icon: FaMobileAlt,
            modalTitle: "Aplicativos Mobile",
            modalDescription: "Aplicativos móveis para Android e iOS, com experiência fluida e dados em tempo real.",
            servicesList: [
                "Apps com React Native e Expo",
                "Experiências gamificadas e interativas",
                "Dados e notificações em tempo real",
                "Integração com câmera, QR Code e GPS",
                "Publicação nas lojas Android e iOS"
            ]
        },
        {
            id: 4,
            title: "E-commerce",
            icon: FaShoppingCart,
            modalTitle: "E-commerce",
            modalDescription: "Plataformas de venda online com catálogo de produtos, carrinho de compras e gestão de pedidos.",
            servicesList: [
                "Catálogo de produtos e vitrine online",
                "Carrinho de compras e checkout",
                "Painel de gestão de vendas e pedidos",
                "Integração com meios de pagamento",
                "Histórico de compras para clientes"
            ]
        },
        {
            id: 5,
            title: "Landing Pages",
            icon: FaBullhorn,
            modalTitle: "Landing Pages",
            modalDescription: "Páginas de conversão rápidas e otimizadas para campanhas, produtos ou captação de leads.",
            servicesList: [
                "Design focado em conversão",
                "Integração com formulários e leads",
                "Otimização de performance e SEO",
                "Layout responsivo para todos os dispositivos",
                "Integração com Google Analytics e Pixel"
            ]
        }
    ]


    return (
        <section className="services section" id="servicos">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">Aqui estão alguns dos serviços que ofereço e que apliquei.</span>

            <div className="services__container grid container">
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={service.id} className="services__content">
                            <div className="services__body">
                                <IconComponent className="services__icon"/>
                                <h3 className="services__title">
                                    {service.title}
                                </h3>

                                <span className="services__button" onClick={() => toggleTab(service.id)} >
                                    Ver mais <FaArrowRight className="services__button-icon"/>
                                </span>

                                <div className={toggleState === service.id ? " services__modal active-modal" : "services__modal"} onClick={() => toggleTab(0)}>
                                    <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
                                        <IoIosCloseCircle className="services__modal-close" onClick={() => toggleTab(0)}/>

                                        <h3 className="services__modal-title">
                                            {service.modalTitle}
                                        </h3>
                                        <p className="services__modal-description">
                                            {service.modalDescription}
                                        </p>

                                        <ul className="services__modal-services grid">
                                            {service.servicesList.map((serviceItem, index) => (
                                                <li key={index} className="services__modal-service">
                                                    <FaCheckCircle className="services__modal-circle"/>
                                                    <p className="services__modal-info">
                                                        {serviceItem}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="faq__container container">
                <h3 className="faq__title">Perguntas Frequentes</h3>
                <span className="faq__subtitle">Tudo o que você precisa saber sobre meu serviço.</span>

                <div className="faq__list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={faqOpen === index ? "faq__item faq__item-open" : "faq__item"}>
                            <div className="faq__header" onClick={() => toggleFaq(index)}>
                                <span className="faq__question">
                                    <FaRegQuestionCircle className="faq__question-icon" />
                                    {faq.question}
                                </span>
                                <FaChevronDown className="faq__arrow" />
                            </div>
                            <div className="faq__answer-wrapper">
                                <p className="faq__answer">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;