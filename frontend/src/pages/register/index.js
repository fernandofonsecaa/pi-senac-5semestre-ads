import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';

import logoImg from '../../assets/logo_reducedfixed.svg';

export default function Register() {
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
                    
                <form>
                    <input placeholder="Nome" />
                    <input type ="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}