import React from "react";
import { FaReact } from "react-icons/fa";
import './skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";    
import Database from "./Database";
import Devops from "./Devops";  


const Skills = () => {
    return (
        <section className="skills section" id="habilidades">
            <h2 className="section__title">
                Skills
            </h2>
            <span className="section__subtitle">
                Conhecimentos e Tecnologias
            </span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Database />
                <Devops />  
            </div>
        </section>
    )
}

 export default Skills;