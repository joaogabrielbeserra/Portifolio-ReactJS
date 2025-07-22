import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './themeToggle.css';

const ThemeToggle = () => {
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
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Alternar tema"
            title={isDarkMode ? "Modo claro" : "Modo escuro"}
        >
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;
