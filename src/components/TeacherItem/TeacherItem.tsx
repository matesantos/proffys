import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'
const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/3276452?s=460&u=5222945a1d9b76fe28b9567dff94f93b24225bbc&v=4" alt="Mateus"/>
                <div>
                    <strong>Mateus</strong>
                    <span>Física</span>
                </div>
            </header>
        
            <p>
                sadfjklajsdlfjalsjfljasldfjaçljflkajsdklfjalksjflkasdjflajsdçfa
                <br/>
                fçaldsfçasçdfjaçlsjdfklajçl
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$300,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
};

export default TeacherItem; 