import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import './styles.css';

import logoImg from '../../assets/logo_reducedfixed.svg';

export default function NewClasses() {
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
                    
                <form>
                    <input placeholder="Título da aula" />
                    <textarea placeholder="Descrição da aula"/>
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}