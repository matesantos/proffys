import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'
import api from '../../services/api';

export interface Teachear{
    id:number
    name:string,
    avatar:string,
    whatsapp:string,
    bio:string,
    subject:string,
    cost:number
}

interface TeachearItemProps {
    teachear: Teachear
 }

const TeacherItem: React.FC<TeachearItemProps> = ({ teachear }) => {

    const createNewConnection = () => {
        api.post('/connections', {
            user_id : teachear.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teachear.avatar} alt={teachear.name}/>
                <div>
                    <strong>{teachear.name}</strong>
                    <span>{teachear.subject}</span>
                </div>
            </header>
        
            <p>
                {teachear.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R${teachear.cost}</strong>
                </p>
                <a onClick={createNewConnection} 
                   href={`https://wa.me/${teachear.whatsapp}`}
                   target="_blank">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
};

export default TeacherItem; 