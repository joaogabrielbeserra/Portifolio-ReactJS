import React, {useState, useEffect} from 'react';
import "./header.css";


const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      header.classList.toggle('scrolled', window.scrollY > 0);


      const sections = ['home', 'sobre', 'projetos', 'habilidades', 'qualificacoes', 'contato'];
      
      let sessaoAtual = 'home';
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            sessaoAtual = sectionId;
          }
        }
      });

      setActiveSection(sessaoAtual);
    };

    window.addEventListener('scroll', handleScroll);
    
    // chama a função uma vez ao carregar para definir a seção inicial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);


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
              <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}>
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#sobre" className={`nav__link ${activeSection === 'sobre' ? 'active-link' : ''}`}>
                <i className="uil uil-user nav__icon"></i>
                Sobre
              </a>
              
            </li>
            <li className="nav__item">
              <a href="#projetos" className={`nav__link ${activeSection === 'projetos' ? 'active-link' : ''}`}>
                <i className="uil uil-scenery nav__icon"></i>
                Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#habilidades" className={`nav__link ${activeSection === 'habilidades' ? 'active-link' : ''}`}>
                <i className="uil uil-wrench nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualificacoes" className={`nav__link ${activeSection === 'qualificacoes' ? 'active-link' : ''}`}>
                <i className="uil uil-file nav__icon"></i>
                Experiências
              </a>
            </li>
            <li className="nav__item">
              <a href="#contato" className={`nav__link ${activeSection === 'contato' ? 'active-link' : ''}`}>
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