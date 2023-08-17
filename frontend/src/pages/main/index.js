import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

import './styles.css';
import api from "../../services/api";
import logoImg from '../../assets/logo_reducedfixed.svg';

export default function Mainpage() {
    const [classes, setClasses] = useState([]);
    const [titles, setTitles] = useState([])

    async function handleIndexFiltered(title) {
        const response = await api.get(`classes/${title}`);
        setClasses(response.data);    
    }

    useEffect(() => {
			api.get('classes').then(response => {
				setClasses(response.data);
			})
    }, []);
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo Music For All"/>

                <Link className='button' to={"/login"}>Login do Professor</Link>
            </header>
            <h1>Aulas Disponíveis</h1>
                <div className = "search-section">
                    <input
                    placeholder = "Busque qual aula gostaria de fazer"
                    value={titles}
                    onChange = {e => setTitles(e.target.value)}  
                    /> 
                    <button onClick ={()=>handleIndexFiltered(titles)}>
                    <FiSearch size={25} color="white"/>
                    </button>
                </div>   

            <ul>
            {classes.map(classes => (
					<li key={classes.id}>
						<strong>AULA:</strong>
						<p>{classes.title}</p>

						<strong>SOBRE A AULA:</strong>
						<p>{classes.description}</p>

            <strong>NOME:</strong>
            <p>{classes.name}</p>

            <div className="main-section">
              <div className="values-section">
                <strong>E-MAIL:</strong>
                <p>{classes.email}</p>
            	</div>

            	<div className="values-section">
              	<strong>WHATSAPP:</strong>
              	<p>{classes.whatsapp}</p>
            	</div>
            </div>
                        
            <div className="main-section">
              <div className="values-section">
                <strong>CIDADE:</strong>
						    <p>{classes.city}</p>
              </div>
            	<div className="values-section">
								<strong>UF:</strong>
						    <p>{classes.uf}</p>
 							</div>
            </div>
                              
						<strong className="last-strong">VALOR:</strong>
						<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(classes.value)}</p>
					</li>
				))}
            </ul>
        </div>
    )
};