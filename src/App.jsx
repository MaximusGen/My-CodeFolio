import './App.css'
import AboutMe from './components/AboutMeContainer/AboutMe';
import ButtonScrollUp from './components/ButtonScrollUp/ButtonScrollUp'
import Nav from './components/Nav/Nav'
import TitleContainer from './components/TitleContainer/TitleContainer';

function App() {

  return (
    <>
    <Nav />
    <header>
      <TitleContainer />
    </header>

    <main>
      <AboutMe />
    </main>
    <ButtonScrollUp />
    </>
  )
}

export default App
