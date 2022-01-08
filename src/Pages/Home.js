import React from "react";

// import components Footer, Main & NavBar
import Footer from "../components/Footer";
import Main from "../components/Home/Main";
import NavBar from "../components/NavBar";

export default function Home() {
  
  return (
    <>
      <header>

        <NavBar/>

      </header>

      <main>
         
        <Main/>
        
      </main>

      <Footer />
    </>
  );
}
