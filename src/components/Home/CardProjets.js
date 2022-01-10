import React from 'react'

export default function CardProjets({projets}) {
    return (
  <li>
    <a href={projets.link} class="card-projets">
      <img src={projets.image} class="card-projets-image" alt="projets-images" />
      <div class="card-projets-overlay">
        <div class="overlay-header">
          <div class="overlay-header-text">
            <h3 class="overlay-title">{projets.name}</h3>            
          </div>
        </div>
        <p class="overlay-description">{projets.description}</p>
      </div>
    </a>      
  </li>
    )
}
