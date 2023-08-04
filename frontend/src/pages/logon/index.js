import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo_reducedfixed.svg';
import musicForAllImg from '../../assets/band_gray.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo Music For All"/>

                <form>
                    <h1>Faça o logon</h1>

                    <input placeHolder="Seu ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#6c5883" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={musicForAllImg} alt="Heroes" />
        </div>
    )
}