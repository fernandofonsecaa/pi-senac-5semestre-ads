import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi"

import './styles.css';
import api from "../../services/api";
import logoImg from '../../assets/logo_reducedfixed.svg';

export default function Profile () {
		const [classes, setClasses] = useState([]);

    const teacherName = localStorage.getItem('teacherName');
		const teacherId = localStorage.getItem('teacherId');

		const navigate = useNavigate();

    useEffect(() => {
			api.get('profile', {
				headers: {
					Authorization: teacherId,
				}
			}).then(response => {
				setClasses(response.data);
			})
    }, [teacherId]);

		async function handleDeleteClasses(id) {
			try {
				await api.delete(`classes/${id}`, {
					headers: {
						Authorization: teacherId
					}
				});
				setClasses(classes.filter(classes => classes.id !== id))
			}catch(err){
				alert('Erro ao deletar aula');
			}
		}

		function handleLogout() {
			localStorage.clear();
			navigate("/login");
		}
    return (
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt="logo Music For All"/>
                <span>Bem vindo, {teacherName}</span>

                <Link className='button' to={"/classes/new"}>Cadastrar nova aula</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#737380" />
                </button>
            </header>
            <h1>Aulas cadastradas</h1>
            
            <ul>
							{classes.map(classes => (
								<li key={classes.id}>
								<strong>AULA:</strong>
								<p>{classes.title}</p>

								<strong>SOBRE A AULA:</strong>
								<p>{classes.description}</p>

								<strong>VALOR:</strong>
								<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(classes.value)}</p>

								<button onClick={() => handleDeleteClasses(classes.id)} type="button">
										<FiTrash2 size={20} color="#a8a8b3"/>
								</button>
						</li>
							))}
            </ul>
        </div>
    )
}