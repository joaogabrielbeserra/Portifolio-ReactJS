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
                                <GrMysql className="skills__icon" /> MySQL - &nbsp; <p className="skills__subtitle">Proficiente</p>
                            </h3>
                            <span className="skills__level">
                                Principal banco, utilizado em todos os projetos acadêmicos e profissionais.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiPostgresql className="skills__icon" /> PostgreSQL - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                Utilizado em projetos com Docker e ambiente On-premise.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiPrisma className="skills__icon" /> Prisma - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                ORM utilizado com Node.js em projetos full-stack.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="">
                            <h3 className="skills__name">
                                <SiMongodb className="skills__icon" /> MongoDB - &nbsp; <p className="skills__subtitle">Básico</p>
                            </h3>
                            <span className="skills__level">
                                Banco não relacional, estudei em uma mate'ria na faculdade.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Database;