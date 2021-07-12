import React from 'react';
import adicionar from '../assets/icones/adicionar.svg';

export const Footer = () => {
    return (
        <div className="container-footer">
            <button><img src={adicionar} alt="Adicionar Tarefas" /> Adicionar Tarefa</button>
            <span>© Copyright {new Date().getFullYear()} Devaria. Todos os direitos reservados.</span>
        </div>
    )
}