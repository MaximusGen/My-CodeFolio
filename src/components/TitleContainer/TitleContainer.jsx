import "./titleContainer.css";
import HoverTextH1 from "./../../utils/HoverTextH1";
import ScrollImg from "../../assets/img/scrollmouse2.png";
import { motion } from "framer-motion";

const TitleContainer = () => {
  return (
    <div className="container title-container">
      <HoverTextH1 line="Maxime Paupy" colorLetter="P" />
      <div className="indication">
        <motion.img
        initial={{x:-1200}}
        animate={{x:0}}
        transition={{duration: 2.5}} 
        className="indication_img" 
        src={ScrollImg} 
        alt="" 
        />

        <motion.div
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{duration: 2.5}} 
        className="indication_line"
        >
        </motion.div>

        <motion.h4
                initial={{x:1200}}
                animate={{x:0}}
                transition={{duration: 2.5}}  
        className="indication_text"
        >
        Scroll Down
        </motion.h4>
      </div>
    </div>
  );
};

export default TitleContainer;
