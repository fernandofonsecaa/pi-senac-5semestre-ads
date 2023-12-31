import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo_reducedfixed.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
		const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

		const navigate = useNavigate();
    async function handleRegister(e) {
        e.preventDefault();

				const data = {
					name,
					email,
					whatsapp,
					city,
					uf
				};

				try {
					const response = await api.post('teachers', data);
					alert(`Seu ID de acesso é: ${response.data.id}`);
					navigate("/login");
				} catch (err) {
					alert('Erro ao cadastrar, tente novamente.')
				}
			}

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt="logo Music For All"/>

                    <h1>Cadastro</h1>
                    <p>Cadastre-se e comece a ensinar música para todos!</p>

                    <Link className="back-link" to="/login">
                        <FiArrowLeft size={16} color="#6c5883" />
                        Voltar
                    </Link>
                </section>
                    
                <form onSubmit={ handleRegister }>
                    <input
                    	placeholder="Nome"
											value={name}
											onChange={e => setName(e.target.value)} 
										/>
                    <input 
											type ="email" 
											placeholder="E-mail"
											value={email}
											onChange={e => setEmail(e.target.value)} 
										/>
                    <input placeholder="WhatsApp"
											value={whatsapp}
											onChange={e => setWhatsapp(e.target.value)} 
										/>

                    <div className="input-group">
                        <input placeholder="Cidade"
													value={city}
													onChange={e => setCity(e.target.value)} 
												/>
                        <input 
													placeholder="UF" 
													style={{ width: 80 }}
													value={uf}
													onChange={e => setUf(e.target.value)}  
												/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}