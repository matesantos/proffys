import React from 'react';
import LogoImage from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyImg from '../../assets/images/icons/study.svg';
import GiveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Link } from 'react-router-dom';

import './styles.css';

const Landing = () => {
    return(
       <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div className="logo-container">
                   <img src={LogoImage} alt="Proffy"/>
                   <h2>Sua plataforma de estudos Online</h2>
               </div>

                <img src={LandingImg} 
                    alt="Plataforma de Estudos" 
                    className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className='study'>
                        <img src={StudyImg} alt="Estudar"/>
                        Estudar
                    </Link>
                
                    <Link to="/give-classes" className='give-classes'>
                        <img src={GiveClassIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizada 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
       </div>
    )
};

export default Landing;