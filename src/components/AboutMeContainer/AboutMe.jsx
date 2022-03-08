import "./aboutMe.css";
import HoverTextH2 from "./../../utils/HoverTextH2";
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container aboutMe-container">
      <HoverTextH2 line="ABOUTME" />
      <motion.div drag whileDrag={{cursor: 'grabbing'}} className="about-me">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, eius
          assumenda. Numquam, molestiae consectetur deleniti vero obcaecati illo
          voluptatum sed a fuga iste incidunt dignissimos, optio officiis
          aliquam quod eveniet.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
