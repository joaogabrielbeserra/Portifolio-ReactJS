import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title">Experiência</h3>
                <span className="about__subtitle">3+ anos desenvolvendo</span>
            </div>
            <div className="about__box">
                <i className='bx bx-briefcase-alt-2 about__icon'></i>
                <h3 className="about__title">Projetos</h3>
                <span className="about__subtitle">+20 concluídos</span>
            </div>
            <div className="about__box">
                <i className='bx bx-buildings about__icon'></i>
                <h3 className="about__title">Setores</h3>
                <span className="about__subtitle">Público e privado</span>
            </div>
        </div>
    )
}

export default Info;