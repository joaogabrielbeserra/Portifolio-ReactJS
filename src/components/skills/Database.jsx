import React from "react";
import { SiPrisma } from "react-icons/si";
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
                                <GrMysql className="skills__icon" />    MySQL - &nbsp; <p className="skills__subtitle">Proeficiente</p>
                            </h3>
                            
                            <span className="skills__level">
                                Tudo que fiz foi com MySQL, tenho experiência com ele.
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <SiPrisma className="skills__icon" />   Prisma - &nbsp; <p className="skills__subtitle">Intermediário</p>
                            </h3>
                            <span className="skills__level">
                                ORM que uso com Node.js, tenho experiência com ele.
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Database;