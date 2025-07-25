import React, {useState, useEffect} from 'react';
import "./header.css";


const Header = () => {
  // Toggle menu state
  const[Toggle, showMenu] = useState(false);

  // Theme toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Carrega o tema salvo no localStorage ao montar o componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Alterna entre os temas
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">João Gabriel</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#sobre" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                Sobre
              </a>
              
            </li>
            <li className="nav__item">
              <a href="#habilidades" className="nav__link">
                <i className="uil uil-wrench nav__icon"></i>
                Habilidades
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualificacoes" className="nav__link">
                <i className="uil uil-file nav__icon"></i>
                Experiências
              </a>
            </li>
            <li className="nav__item">
              <a href="#projetos" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#contato" className="nav__link">
                <i className="uil uil-at nav__icon"> </i>
                Contato
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__actions">
          <div className="theme-switch" onClick={toggleTheme}>
            <div className={`theme-switch-toggle ${isDarkMode ? 'active' : ''}`}>
              <i className={isDarkMode ? "uil uil-sun" : "uil uil-moon"}></i>
            </div>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header