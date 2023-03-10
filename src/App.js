import './App.css';
import Intro from './components/Intro'

const animStr = () =>`fadeIn 1000ms ease-out ${1000 * (Math.random())}ms forwards`;

const ArrowDown = () => {
  const arrowDown = document.getElementsByClassName('arrow-down')
  setTimeout(() => {
    arrowDown[0].textContent = '↓'
    arrowDown[0].style.animation = animStr()
  }, 1500)
  return <div className='arrow-down'></div>

}

function App() {
  return (
    <div className="App">
      <Intro />
      <ArrowDown />
    </div>
  );
}

export default App;
