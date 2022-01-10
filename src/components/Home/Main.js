import React, { useEffect, useState } from "react";
import axios from "axios";
import Typed from "react-typed";
import CardProjets from "./CardProjets";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function Main() {
  const [showProjets, setShowProjets] = useState(false);

  const [data, setData] = useState([]);

  const Chartdata = {
    labels: [
      "HTML5",
      "CSS3",
      "JAVASCRIPT",
      "REACTJS",
      "NODEJS",
      "SASS",
      "BOOTSTRAP",
    ],
    datasets: [
      {
        label: "",
        data: ["5", "4.8", "4.5", "4.5", "4", "4.5", "5"],
        backgroundColor: [
          "#f16529",
          "#2194f0",
          "#efd81d",
          "#00d5f7",
          "#87bf00",
          "#c96195",
          "#6438b1",
        ],
      },
    ],
  };

  useEffect(() => {
    getProjets();
  }, []);

  const getProjets = () => {
    axios
      .get("http://localhost:5005/projets")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

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
                  7 projets à réalisés avec un mentor
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
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
            </div>
            <div className="card-back">
              <a
                className="btn btn-primary btn-floating m-1 bg-inst"
                href="https://www.instagram.com/maximusgen___/?hl=fr"
                role="button"
              >
                <i className="fab fa-instagram" aria-label="instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1 bg-fb"
                href="https://www.facebook.com/MaxZaraPaupy"
                role="button"
              >
                <i className="fab fa-facebook-f" aria-label="facebook"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1 bg-lkd"
                href="https://www.linkedin.com/in/maxime-paupy-a13497190/"
                role="button"
              >
                <i className="fab fa-linkedin-in" aria-label="linkedIn"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1 bg-icon"
                href="https://github.com/MaximusGen/"
                role="button"
              >
                <i className="fab fa-github" aria-label="gitHub"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <p>Compétences</p>
              <i className="arrow-icon fas fa-arrow-right" aria-label="retourner la carte"></i>
            </div>
            <div className="card-back">
              <div className="competence">
              <Chart type="bar" data={Chartdata} />
              <ul>
                <li>.Développement de sites et applications web</li>
                <li>.Correction et amélioration d'un site web</li>
                <li>.Référencement d'un site web</li>
              </ul>
              <p>Pour voir mes différent projets, je vous invite à visiter la carte <a href="#mes-projets">"Mes Projets"</a></p>
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

      {showProjets && (
        <div className="container-projets" id="projets">
          <div
            className="title-container"
            onClick={() => setShowProjets(false)}
          >
            <h2>Mes Projets</h2>
            <a href="#codefolio">
              <i class="fas fa-times cross"></i>
            </a>
          </div>
          <div className="projets-content">
            {data.map((projets) => (
              <CardProjets key={projets.id} projets={projets} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
