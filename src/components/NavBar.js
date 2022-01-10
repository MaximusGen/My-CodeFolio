import React from 'react'

export default function NavBar() {
    return (
     <>
     <nav>
          <div className="logo">
            <img src="../assets/img/logo.jpg" alt="logo-my-website" />
          </div>
          <div className="link-nav">
            <a href="#contact" aria-label="contact">Contact</a>
          </div>
        </nav>

     </>
    )
}
