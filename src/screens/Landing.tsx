import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/pages/landing.styles.scss'
import logoImg from '../images/logo.svg';
import share from '../images/share.svg';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Landing(){
  
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })
  
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <div className="logo-name">
            <img src={logoImg} alt="logo" />
            <strong>Posts</strong>
            <span>Dev</span>
          </div>  

          <div className="any">
            <div className="description">
              <h1>Seu lugar de comentar sobre tecnologia!</h1>
              <p>O melhor site para networking para post de notícias e tira dúvidas com outros devs</p>
            </div>

            <img src={share} alt="share" className="img-body"/>
          </div>
        </main>

        <div className="location">
          <strong>{currentDate}</strong>
          <span>Ceará</span>
        </div>

        <div className="button">
          <Link to="/" className="sign-up">
            <FiArrowRight size={36} color="0,0,0,0.6"/>
          </Link>
        </div>
      </div>
    </div>
  );
}