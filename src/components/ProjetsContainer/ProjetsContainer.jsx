import './projetsContainer.css';
import HoverTextH2 from '../../utils/HoverTextH2';
import {motion} from 'framer-motion'
import { useState } from 'react';
import escape from '../../assets/close.svg'


const ProjetsContainer = () => {
   const [modalOpen, setModalOpen] = useState(false);

   

    return (
       <div className="container projets-container">

         <HoverTextH2 line="projets" />
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         className="button"
         onClick={() => setModalOpen(true)}
         >
         </motion.div>

           {modalOpen && (

              <motion.div 
              initial={{scale:0.5}}
              animate={{scale:1}}
              whileHover={{boxShadow:1}}
              transition={{duration: 1}}
              onClick={() => setModalOpen(false)}
              className="modal">
                <motion.p
                  initial={{scale:1}}
                  animate={{scale:0.5}}
                  transition={{duration: 1.5,repeat: Infinity}}
                >Reservia</motion.p> 
              </motion.div>
           ) }
       </div>
    )
}

export default ProjetsContainer