import React, { useState } from 'react';
import './Login.css'
import api from '../services/api';

import logo from '../Assets/logo.svg'

export default function Login({ history }) {

    const [username, setUsername] = useState('');

    async function handlerSubmit(e) {
        e.preventDefault();
        
        const response = await api.post('/devs', {
            username
        });
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handlerSubmit}>
                <img src={logo} alt='Tindev'/>
                <input placeholder="Digite seu perfil do github aqui!" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar!</button>
            </form>
        </div>
    );
}