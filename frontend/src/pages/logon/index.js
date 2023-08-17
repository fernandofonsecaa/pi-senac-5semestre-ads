import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo_reducedfixed.svg';
import musicForAllImg from '../../assets/band_gray_cropped.png';

export default function Logon() {
    const [id, setId] = useState ('');
		const navigate = useNavigate();

		async function handleLogin(e) {
			e.preventDefault();

			try {
				const response = await api.post('/sessions', { id })
				localStorage.setItem('teacherId', id);
				localStorage.setItem('teacherName', response.data.name)

				navigate("/profile");
			} catch(err) {
				alert('Falha no login, tente novamente.');
			}
		}

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo Music For All"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça o login</h1>

                    <input
                    	placeholder="Seu ID"
											value={id}
											onChange={e => setId(e.target.value)}
										/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#6c5883" />
                        Voltar para Home
                    </Link>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#6c5883" />
                        Cadastre-se
                    </Link>
                </form>
            </section>

            <img src={musicForAllImg} alt="Heroes" />
        </div>
    )
}