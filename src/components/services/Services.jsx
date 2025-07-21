import React, {useState} from "react";
import './services.css';
import { FiLayout } from "react-icons/fi";
import { FaArrowRight, FaCheckCircle  } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { FaServer } from "react-icons/fa";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const services = [
        {
            id: 1,
            title: "Frontend",
            icon: FiLayout,
            modalTitle: "Desenvolvimento Frontend",
            modalDescription: "Ofereço desenvolvimento de telas desde a sua concepção em design até o desenvolvimento completo e responsivo.",
            servicesList: [
                "Concepção de WireFrames em Figma",
                "Prototipação e Design de Interface",
                "Desenvolvimento Web Responsivo",
                "Desenvolvimento de aplicativos móveis",
                "Sites WordPress e plugins personalizados"
            ]
        },
        {
            id: 2,
            title: "Backend",
            icon: FaServer,
            modalTitle: "Desenvolvimento Backend",
            modalDescription: "Desenvolvimento de APIs robustas, bancos de dados e integração de sistemas.",
            servicesList: [
                "Desenvolvimento de APIs REST",
                "Integração com bancos de dados",
                "Autenticação e autorização",
                "Integração com serviços terceiros",
                "Otimização de performance"
            ]
        },
        {
            id: 3,
            title: "Fullstack",
            icon: MdDeveloperMode,
            modalTitle: "Desenvolvimento Fullstack",
            modalDescription: "Soluções completas integrando frontend e backend para aplicações robustas.",
            servicesList: [
                "Aplicações web completas",
                "Integração frontend/backend",
                "Deploy e configuração de servidores",
                "Manutenção e suporte técnico",
                "Consultoria em arquitetura de software"
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
                            <div className="">  
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
        </section>
    )
}

export default Services;