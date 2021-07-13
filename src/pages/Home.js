import React, { useState } from 'react';
import { Filtros } from '../componentes/Filtros';
import { Footer } from '../componentes/Footer';
import { Header } from '../componentes/Header';
import { Listagem } from '../componentes/Listagem';

export const Home = props => {

    const [tarefas, setTarefas] = useState ([

        
        {
            id: '2',          
            nome: 'Estudo Kotlin',
            dataPrevistaConclusao: '2021-06-23',
            dataConclusao: '2021-07-10'
        },
        {
            id: '3',            
            nome: 'Estudo ReactJS',
            dataPrevistaConclusao: '2021-07-01',
            dataConclusao: null
            }
        
    ]);

    const sair = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        props.setAccessToken('');
    }

    return (
        <>
            <Header sair={sair}/>
            <Filtros />      
            <Listagem tarefas={tarefas} />  
            <Footer />   
        </>
    )
}