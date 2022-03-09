import './skillsContainer.css'
import HoverTextH2 from './../../utils/HoverTextH2';

const SkillsContainer = () => {
    return(
       <div className="container skills-container">
           <div className="skills">
            <div className="skills_text">
                <ul>
                    <li>Développement backend et frontend de sites et applications web ;</li>
                    <li>Créer des animations</li>
                    <li>Correction et amélioration d'un site web</li>
                    <li>Référencement d'un site web</li>
                    <li>Utiliser un framework pour développer le frontend</li>
                    <li>Création et gestion d'une base de données</li>
                </ul>
            </div>
            <div className="skills_languages">  
             </div>   
            </div>
          <HoverTextH2 line="SKILLS" />    
       </div>
    )
}

export default SkillsContainer