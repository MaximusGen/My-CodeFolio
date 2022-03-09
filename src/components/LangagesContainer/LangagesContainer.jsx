import './langagesContainer.css';
import HoverTextH2 from './../../utils/HoverTextH2';
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import javascript from '../../assets/javascript.svg'
import css from '../../assets/css.svg'

const LangagesContainer = () => {
    return (
      <div className="container langages-container">
          <HoverTextH2 line="Langages" />
         <div className="langages">
            <div className="langages_block">
              <div className="langages_img">
                <img src={react} alt="" />
                <p>React</p>
              </div>
              <div className="langages_line "></div>
            </div>  
            <div className="langages_block">
              <div className="langages_img">
                <img src={node} alt="" />
                <p>Node JS</p>
              </div>
              <div className="langages_line node"></div>
            </div>  
            <div className="langages_block">
              <div className="langages_img">
                <img src={javascript}  alt="" />
                <p>JavaScript</p>
              </div>
              <div className="langages_line javascript"></div>
            </div>  
            <div className="langages_block">
              <div className="langages_img">
                <img src={css}  alt="" />
                <p>CSS3</p>
              </div>
              <div className="langages_line"></div>
            </div>  
         </div> 
      </div>
    )
}


export default LangagesContainer