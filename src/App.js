import './App.css';
import Intro from './components/Intro'
import Bio from './components/Bio'
import SelectedProjects from './components/SelectedProjects'
import Skills from './components/Skills'
import Footer from './components/Footer'

const animStr = () =>`fadeIn 1000ms ease-out ${1000 * (Math.random())}ms forwards`;

const ArrowDown = () => {
  const arrowDown = document.getElementsByClassName('arrow-down')
  setTimeout(() => {
    arrowDown[0].style.animation = animStr()
  }, 1500)
  return <div className='arrow-down'>↓</div>

}

function App() {
  return (
    <div className="App">
      <Intro />
      <ArrowDown />
      <Bio />
      <SelectedProjects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
