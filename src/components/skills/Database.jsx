import React from "react";
import { SiPrisma, SiPostgresql, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Database = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                Database
            </h3>
            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <GrMysql className="skills__icon" /> MySQL <p className="skills__subtitle">Proficiente</p>
                            </h3>
                            <span className="skills__level">
                                Banco principal em projetos reais.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiPostgresql className="skills__icon" /> PostgreSQL <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Projetos com Docker e On-premise.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiPrisma className="skills__icon" /> Prisma <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                ORM com Node.js em projetos full-stack.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiMongodb className="skills__icon" /> MongoDB <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Banco não relacional, uso acadêmico.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Database;