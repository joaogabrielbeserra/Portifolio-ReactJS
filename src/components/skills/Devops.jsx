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
                                <FaGitAlt className="skills__icon" /> Git <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                Branches, merges, rebase e conflitos.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaGithub className="skills__icon" /> GitHub <p className="skills__subtitle">Avançado</p>
                            </h3>
                            <span className="skills__level">
                                PRs, code review e repositórios.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaDocker className="skills__icon" /> Docker <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Containers e deploy On-premise.
                            </span>
                        </div>
                    </div>

                    {/* Adicionado o bloco do Oracle Cloud */}
                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiOracle className="skills__icon" /> Oracle Cloud <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Certificado OCI Foundations Associate.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <FaAws className="skills__icon" /> AWS <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Certificado AWS Cloud Practitioner.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <IoLogoVercel className="skills__icon" /> Vercel <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Deploy de projetos frontend.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Devops;