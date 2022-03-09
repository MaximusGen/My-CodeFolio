import './App.css'
import AboutMe from './components/AboutMeContainer/AboutMe';
import ButtonScrollUp from './components/ButtonScrollUp/ButtonScrollUp'
import LangagesContainer from './components/LangagesContainer/LangagesContainer';
import Nav from './components/Nav/Nav'
import ProjetsContainer from './components/ProjetsContainer/ProjetsContainer';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import TitleContainer from './components/TitleContainer/TitleContainer';
import HoverTextH2 from './utils/HoverTextH2';

function App() {

  return (
    <>
    <Nav />

    <header>
      <TitleContainer />
    </header>

    <main>

      <AboutMe />
      <SkillsContainer />
      <LangagesContainer />
      <ProjetsContainer />
    </main>

    <ButtonScrollUp />
    </>
  )
}

export default App
