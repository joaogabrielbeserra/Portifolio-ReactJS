import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contato">
            <h2 className="section__title">Entre em contato</h2>
            <span className="section__subtitle">Entre em contato comigo.</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">
                        Vamos conversar !
                    </h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <MdEmail className="contact__icon-title" />
                            <h3 className="contact__card-title">E-mail</h3>
                            <span className="contact__card-data">jgabrielfbeserra@gmail.com</span>
                            <a href="mailto:jgabrielfbeserra@gmail.com?subject=Orçamento%20para%20serviço&body=Olá%20João%2C%0A%0AGostaria%20de%20solicitar%20um%20orçamento%20para%20o%20seguinte%20serviço%3A%0A%5Bdescreva%20aqui%5D%0A%0AObrigado!" target="_blank" className="contact__button">Disparar E-mail!{""}
                                <FaArrowRight className="contact__button-icon" />
                            </a>

                        </div>
                        <div className="contact__card">
                            <i class="uil uil-whatsapp contact__icon-title"></i>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+55 (12) 99721 - 5547</span>
                            <a href="https://wa.me/5512997215547?text=Ol%C3%A1%20Jo%C3%A3o%2C%0A%0AGostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20seguinte%20servi%C3%A7o..." target="_blank" className="contact__button">Iniciar uma conversa!{""}
                                <FaArrowRight className="contact__button-icon" />
                            </a>

                        </div>
                        <div className="contact__card">
                            <i class="uil uil-linkedin contact__icon-title"></i>
                            <h3 className="contact__card-title">Linkedin </h3>

                            <span className="contact__card-data">João Gabriel de Faria Beserra</span>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-de-faria-beserra-b352a3305/" target="_blank" className="contact__button">Dar uma olhada!{""}
                                <FaArrowRight className="contact__button-icon" />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">
                        Faça um orçamento!
                    </h3>
                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Nome</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insira seu nome" />

                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">E-mail</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insira seu e-mail" />

                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Mensagem</label>
                            <textarea type="text" name="descricao" cols={30} rows={10} id="" className="contact__form-input " placeholder="Descreva seu projeto" />

                        </div>
                        <button href="#contato" className="button button--flex" style={{ fontWeight: "var(--font-semi-bold)" }}>
                            Enviar mensagem
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="#fff"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="#fff"
                                ></path>
                            </svg>


                        </button>
                    </form>
                </div>


            </div>
        </section>
    )
}

export default Contact;
