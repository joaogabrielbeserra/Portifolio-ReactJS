import React, { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import './contact.css';

// zoa nao carai, deixe isso aqui quieto, mania sua de ficar fuxicando hein
const SERVICE_ID = "service_2fg06yd";
const TEMPLATE_ID = "template_1j8nqlr";
const PUBLIC_KEY = "RP1MiW6N7hBUW-xa6";

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus("success");
                formRef.current.reset();
                setTimeout(() => setStatus("idle"), 4000);
            })
            .catch(() => {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            });
    };

    return (
        <section className="contact section" id="contato">
            <h2 className="section__title">Entre em contato</h2>
            <span className="section__subtitle">Entre em contato comigo.</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">
                        Vamos conversar!
                    </h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <MdEmail className="contact__icon-title" />
                            <h3 className="contact__card-title">E-mail</h3>
                            <span className="contact__card-data">jgabrielfbeserra@gmail.com</span>
                            <a href="mailto:jgabrielfbeserra@gmail.com?subject=Orçamento%20para%20serviço&body=Olá%20João%2C%0A%0AGostaria%20de%20solicitar%20um%20orçamento%20para%20o%20seguinte%20serviço%3A%0A%5Bdescreva%20aqui%5D%0A%0AObrigado!" target="_blank" rel="noopener noreferrer" className="contact__button">
                                Disparar E-mail!
                                <FaArrowRight className="contact__button-icon" />
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="uil uil-whatsapp contact__icon-title"></i>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+55 (12) 99721 - 5547</span>
                            <a href="https://wa.me/5512997215547?text=Ol%C3%A1%20Jo%C3%A3o%2C%0A%0AGostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20seguinte%20servi%C3%A7o..." target="_blank" rel="noopener noreferrer" className="contact__button">
                                Iniciar uma conversa!
                                <FaArrowRight className="contact__button-icon" />
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="uil uil-linkedin contact__icon-title"></i>
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">João Gabriel de Faria Beserra</span>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-de-faria-beserra-b352a3305/" target="_blank" rel="noopener noreferrer" className="contact__button">
                                Dar uma olhada!
                                <FaArrowRight className="contact__button-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">
                        Fale comigo! 
                    </h3>
                    <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag" htmlFor="name">Nome</label>
                            <input
                                type="text"
                                name="from_name"
                                id="name"
                                className="contact__form-input"
                                autoComplete="name"
                                placeholder="Insira seu nome"
                                required
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag" htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="from_email"
                                id="email"
                                className="contact__form-input"
                                autoComplete="email"
                                placeholder="Insira seu e-mail"
                                required
                            />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag" htmlFor="descricao">Mensagem</label>
                            <textarea
                                id="descricao"
                                name="message"
                                cols={30}
                                rows={10}
                                className="contact__form-input"
                                placeholder="Descreva seu projeto"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="button button--flex"
                            style={{ fontWeight: "var(--font-semi-bold)" }}
                            disabled={status === "sending"}
                        >
                            {status === "sending" && "Enviando..."}
                            {status === "success" && "Mensagem enviada! ✓"}
                            {status === "error" && "Erro ao enviar. Tente novamente."}
                            {status === "idle" && (
                                <>
                                    Enviar mensagem
                                    <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z" fill="currentColor"></path>
                                        <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="currentColor"></path>
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;