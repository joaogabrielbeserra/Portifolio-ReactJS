import React from "react";
import { FaDocker, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiOracle } from "react-icons/si"; // Importação adicionada

const Devops = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                Devops
            </h3>
            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaGitAlt className="skills__icon" /> Git - &nbsp; <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Versionamento no dia a dia, branches, merges, rebase e resolução de conflitos.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaGithub className="skills__icon" /> GitHub - &nbsp; <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Trabalho solo e em equipe, PRs, code review e organização de repositórios.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaDocker className="skills__icon" /> Docker - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Containers, Docker Compose e deploy On-premise em projetos reais.
                            </span>
                        </div>
                    </div>

                    {/* Adicionado o bloco do Oracle Cloud */}
                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiOracle className="skills__icon" /> Oracle Cloud - &nbsp; <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Certificado Oracle Cloud Infrastructure (OCI) Foundations Associate.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaAws className="skills__icon" /> AWS - &nbsp; <p className="skills__subtitle">Intermedia'rio</p>
                            </h3>
                            <span className="skills__level">
                                Curso AWS Cloud Practitioner concluído com badge conquistado.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <IoLogoVercel className="skills__icon" /> Vercel - &nbsp; <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Deploy de projetos frontend e portfólio pessoal.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Devops;