import React from 'react'

export default function CardProjets({projets}) {
    return (
  <li>
    <a href={projets.link} class="card-projets">
      <img src={projets.image} class="card-projets-image" alt="" />
      <div class="card-projets-overlay">
        <div class="overlay-header">
          <img class="overlay-thumb" src="../assets/img/max.jpg" alt="" />
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
