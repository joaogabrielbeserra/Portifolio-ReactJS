import React, { useState, useEffect } from "react";

const ProjetoCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile (largura ≤ 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // checa ao carregar
    window.addEventListener("resize", handleResize); // escuta mudanças de tamanho

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  // Define a imagem a ser mostrada
  const imageSrc = isMobile
    ? project.backgroundUrl
    : isHovered && project.gifUrl && project.gifUrl.trim() !== ""
    ? project.gifUrl
    : project.backgroundUrl;

  return (
    <div
      className="project__box"
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="project__box-overlay">
        <div className="project__box-view">
          <h3 className="project__box-title">{project.title}</h3>
        </div>
        <div className="project__box-tags">
          <span className="project__tag project__tag--type">{project.type}</span>
          <span className="project__tag project__tag--tech">{project.tech}</span>
        </div>
        <div className="project__box-hover-content">
          <ul className="project__box-topics">
            {project.skills.slice(0, 5).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p className="project__box-cta">Ver detalhes</p>
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
