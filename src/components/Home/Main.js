import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Typed from "react-typed";
import CardProjets from './CardProjets';

export default function Main() {
    const [showProjets, setShowProjets] = useState(false)

    const [data, setData] = useState([])
      
    useEffect(() => {
      
      getProjets();
    }, [])
   
    const getProjets = () => {
      axios.get('http://localhost:5005/projets')
      .then((res) => setData(res.data))
      .catch((err) =>  console.log(err))
    }

    return (
        <div className="container">
        <h1 id="codefolio">Welcome to my Codefolio </h1>
  
        <div className="card-container">
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <p>A propos de moi !</p>
                <i className="arrow-icon fas fa-arrow-right"></i>
              </div>
              <div className="card-back">
                <p className="about-me">
                  <Typed
                    className="typed-list"
                    loop
                    strings={[
                      "Je m'appelle Maxime",
                      "Je suis Développeur Web",
                      "Développeur Front-end",
                      "Après quelques années en restauration",
                      "Je me suis reconvertie",
                      "Je suis passioné par",
                      "Le web et le design",
                      "J'ai réalisé différents projets",
                      "Comme Réservia, OhMyFood ...",
                      "Je continue à évoluer et à enrichir mes connaissances dans le web",
                    ]}
                    typeSpeed={40}
                    backSpeed={20}
                  />
                </p>
              </div>
            </div>
          </div>
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <p>Ma Formation</p>
                <i className="arrow-icon fas fa-arrow-right"></i>
              </div>
              <div className="card-back">
                <p>
                  <span className="formation">Openclassrooms</span>
                  <span className="formation">Bac+2 Développeur Web</span>
                  <span className="formation">7 projets à réalisés avec un mentor</span>
                  <span className="formation">
                    <a href="https://openclassrooms.com/fr/paths/556-developpeur-web">
                    👁️ Voir plus
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <p>Mes Projets</p>
                <i className="arrow-icon fas fa-arrow-right"></i>
              </div>
              <div className="card-back">
                <a 
                href="#projets" 
                className="btn-link"
                onClick={() => setShowProjets(true)}
                >
                  {" "}
                  Let's go !!
                </a>
              </div>
            </div>
          </div>
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <p>Mes Réseaux !</p>
                <i className="arrow-icon fas fa-arrow-right"></i>
              </div>
              <div className="card-back">
  
                <a
                className="btn btn-primary btn-floating m-1 bg-inst"
                href="https://www.instagram.com/maximusgen___/?hl=fr"
                role="button"
                >
                <i className="fab fa-instagram"></i>
                </a>
  
                <a
                className="btn btn-primary btn-floating m-1 bg-fb"
                href="https://www.facebook.com/MaxZaraPaupy"
                role="button"
                >
                <i className="fab fa-facebook-f"></i>
                </a>
  
                <a
                className="btn btn-primary btn-floating m-1 bg-lkd"
                href="https://www.linkedin.com/in/maxime-paupy-a13497190/"
                role="button"
                >
                <i className="fab fa-linkedin-in"></i>
                </a>
  
                <a
                className="btn btn-primary btn-floating m-1 bg-icon"
                href="https://github.com/MaximusGen/"
                role="button"
                >
                <i className="fab fa-github"></i>
                </a>
  
              </div>
            </div>
          </div>
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <p>Compétences</p>
                <i className="arrow-icon fas fa-arrow-right"></i>
              </div>
              <div className="card-back">
                <p className="competences">
                 <i className="fab fa-html5" id="icon-html"></i>
                 <i className="fab fa-css3-alt" id="icon-css3"></i>
                 <i className="fab fa-js-square" id="icon-js"></i>
                 <i className="fab fa-sass" id="icon-sass"></i>
                 <i className="fab fa-react" id="icon-react"></i>
                 <i className="fab fa-node-js" id="icon-nodejs"></i>
                 <i className="fab fa-bootstrap" id="icon-bootstrap"></i>
                </p>
              </div>
            </div>
          </div>
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <p>Mon CV </p>
                <i className="arrow-icon fas fa-arrow-right"></i>
              </div>
              <div className="card-back">
                <a href="../assets/CV_Maxime_Paupy.pdf" className="btn-link">
                  {" "}
                  Je veux voir !!
                </a>
              </div>
            </div>
          </div>
  
        </div>
  
        {showProjets && (
  
                <div className="container-projets" id="projets">
                <div className="title-container" onClick={() => setShowProjets(false)}>
                <h2>Mes Projets</h2>
                <a href="#codefolio"><i class="fas fa-times cross"></i></a>
                </div>
                  <div className="projets-content">
                    
                    {data.map((projets) => (
                  <CardProjets key={projets.id} projets={projets} />
                ))}
                    
                  </div>
              </div>
        )}
  
      </div>
    )
}
