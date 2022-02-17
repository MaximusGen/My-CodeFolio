import React from "react";
import Typed from "react-typed";
import CardProjets from "./CardProjets";
import {data} from '../../database/data'
import {FaReact, FaNodeJs, FaCss3, FaSass, FaBootstrap, FaJsSquare} from 'react-icons/fa'
import { isEmpty } from './../../utils';

export default function Main() {



  return (
    <div className="container">
      <h1 id="codefolio">Welcome to my Codefolio </h1>

      <div className="card-container">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <p>A propos de moi !</p>
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
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
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
            </div>
            <div className="card-back">
              <p>
                <span className="formation">Openclassrooms</span>
                <span className="formation">Bac+2 Développeur Web</span>
                <span className="formation">
                  7 projets à réaliser avec un mentor
                </span>
                <span className="formation">
                  <a href="https://openclassrooms.com/fr/paths/556-developpeur-web" aria-label="Voir plus">
                    👁️ Voir plus
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card" id="mes-projets">
            <div className="card-front">
              <p>Mes Projets</p>
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
            </div>
            <div className="card-back">
              <a
                href="#projets"
                className="btn-link"
              >
                Let's go !!
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <p>Mes Réseaux !</p>
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
            </div>
            <div className="card-back">
              <a
                className="btn btn-primary btn-floating m-1 bg-inst"
                href="https://www.instagram.com/maximusgen___/?hl=fr"
                role="button"
                aria-label="lien vers instagram"
              >
                <i className="fab fa-instagram" aria-label="instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1 bg-fb"
                href="https://www.facebook.com/MaxZaraPaupy"
                role="button"
                aria-label="lien vers facebook"
              >
                <i className="fab fa-facebook-f" aria-label="facebook"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1 bg-lkd"
                href="https://www.linkedin.com/in/maxime-paupy-a13497190/"
                role="button"
                aria-label="lien vers linkedin"
              >
                <i className="fab fa-linkedin-in" aria-label="linkedIn"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1 bg-icon"
                href="https://github.com/MaximusGen/"
                role="button"
                aria-label="lien vers github"
              >
                <i className="fab fa-github" aria-label="gitHub"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <p>Langages</p>
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
            </div>
            <div className="card-back">
              <div className="competence">
                <div className="icon-competence">
              <FaReact color="#5ccfee" size={60} aria-label="icon langages"/>
                   <p>React</p>
                </div>
                <div className="icon-competence">
              <FaNodeJs color="#89bb3c" size={60} aria-label="icon langages"/>
                  <p>Node JS</p>
                </div>
                <div className="icon-competence">
              <FaCss3 color="#2449d8" size={60} aria-label="icon langages"/>
                  <p>CSS3</p>
                </div>
                <div className="icon-competence">
              <FaSass color="#c36192" size={60} aria-label="icon langages"/>
                  <p>SASS</p>
                </div>
                <div className="icon-competence">
              <FaBootstrap color="#6d11ea" size={60}aria-label="icon langages" />
                  <p>Bootstrap</p>
                </div>

                <div className="icon-competence">
              <FaJsSquare color="#ead41c" size={60}aria-label="icon langages" />
                  <p>JavaScript</p>
                </div>
              </div>
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

        <div className="container-projets" id="projets">
          <div
            className="title-container"
          >
            <h2>Mes Projets</h2>
          </div>
          <div className="projets-content">
            {!isEmpty(data) && data.map((projet) => {
              return  <CardProjets projet={projet} key={projet.id} />
            })}
          </div>
        </div>
    </div>
  );
}
