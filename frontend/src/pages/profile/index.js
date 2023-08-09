import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi"
import './styles.css';

import logoImg from '../../assets/logo_reducedfixed.svg';

export default function Profile () {
    return (
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt="logo Music For All"/>
                <span>Bem vindo, userTest</span>

                <Link className='button' to={"/classes/new"}>Cadastrar nova aula</Link>
                <button type="button">
                    <FiPower size={18} color="#737380" />
                </button>
            </header>
            <h1>Aulas cadastradas</h1>
            
            <ul>
                <li>
                    <strong>AULA:</strong>
                    <p>Violino</p>

                    <strong>SOBRE A AULA:</strong>
                    <p>Aula de violino para iniciantes</p>

                    <strong>VALOR:</strong>
                    <p>R$80,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>AULA:</strong>
                    <p>Violino</p>

                    <strong>SOBRE A AULA:</strong>
                    <p>Aula de violino para iniciantes</p>

                    <strong>VALOR:</strong>
                    <p>R$80,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>AULA:</strong>
                    <p>Violino</p>

                    <strong>SOBRE A AULA:</strong>
                    <p>Aula de violino para iniciantes</p>

                    <strong>VALOR:</strong>
                    <p>R$80,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>AULA:</strong>
                    <p>Violino</p>

                    <strong>SOBRE A AULA:</strong>
                    <p>Aula de violino para iniciantes</p>

                    <strong>VALOR:</strong>
                    <p>R$80,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}