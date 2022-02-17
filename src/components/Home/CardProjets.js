import React from 'react'

export default function CardProjets({projet}) {
    return (
      <>
  <li>
    <a href={projet.link} className="card-projets">
    <img src={projet.image} className="card-projets-image" alt="projets-images" />
      <div className="card-projets-overlay">
        <div className="overlay-header">
          <div className="overlay-header-text">
            <h3 className="overlay-title">{projet.name}</h3>            
          </div>
        </div>
        <p className="overlay-description">{projet.details}</p>
      </div>
    </a>      
  </li>

  </>
    )
}
