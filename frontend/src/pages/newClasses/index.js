import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import './styles.css';

import api from "../../services/api";
import logoImg from '../../assets/logo_reducedfixed.svg';

export default function NewClasses() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

		const navigate = useNavigate();
		const teacherId = localStorage.getItem('teacherId');

		async function handleNewClasses(e) {
			e.preventDefault();
			const data = {
				title,
				description,
				value
			};
			try {
				await api.post('classes', data, {
					headers: {
						Authorization: teacherId
					}
				});
				navigate("/profile")
			}catch(err){
				alert('Erro ao cadastrar aula, tente novamente.')
			}
		}

    return (
        <div className='new-classes-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt="logo Music For All"/>

                    <h1>Cadastrar nova aula</h1>
                    <p>Cadastre aqui novas aulas para poder ensinar mais pessoas.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#6c5883" />
                        Voltar para home
                    </Link>
                </section>
                    
                <form onSubmit={handleNewClasses}>
                    <input 
                    	placeholder="Título da aula"
											value={title}
											onChange={e => setTitle(e.target.value)}
										/>
                    <textarea 
											placeholder="Descrição da aula"
											value={description}
											onChange={e => setDescription(e.target.value)}
											/>
                    <input 
											placeholder="Valor em reais"
											value={value}
											onChange={e => setValue(e.target.value)}
										/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}