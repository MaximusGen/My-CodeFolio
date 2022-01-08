import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Mentions() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="../assets/img/logo.jpg" alt="" />
          </div>
          <div className="link-nav">
            <Link to="/">Home</Link>
          </div>
        </nav>
      </header>

      <main>
          <div className="container">
              Hello!
          </div>
      </main>

      <Footer />
    </>
  );
}
