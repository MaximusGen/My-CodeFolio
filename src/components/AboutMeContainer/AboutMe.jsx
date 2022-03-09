import "./aboutMe.css";
import HoverTextH2 from "./../../utils/HoverTextH2";
import {motion} from 'framer-motion'
import Typed from "react-typed";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container aboutMe-container">
      <HoverTextH2 line="ABOUTME" />
      <motion.div drag whileDrag={{cursor: 'grabbing'}} className="about-me">
      <Typed
                  className="typed-list"
                  loop
                  strings={[
                    "Je m'appelle Maxime",
                    "Je suis Développeur Web",
                    "Développeur Front-end",
                    "Après quelques années en restauration",
                    "Je me suis reconverti",
                    "Je suis passioné par",
                    "Le web et le design",
                    "J'ai réalisé différents projets",
                    "Comme Réservia, OhMyFood ...",
                    "Je continue à évoluer et à enrichir mes connaissances dans le web",
                  ]}
                  typeSpeed={40}
                  backSpeed={20}
                />
      </motion.div>
    </div>
  );
};

export default AboutMe;
