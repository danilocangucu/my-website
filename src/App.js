import './App.css';

function LoadIntroText(){
  return (
    <>
    I am a text that contains a short description
    </>
  )
}

const SomeComponent = ({ item }) => {
  const duration = 200; //ms
  const delay = 600; //ms
  const animStr = () =>`fadeIn ${duration}ms ease-out ${delay * (Math.random())}ms forwards`;
  let characters = item.split('')
  console.log(characters)
  return (
  <>
  <div style={{ display: "block", position: "relative" }}>
  {characters.map(char => <div className="animate" style={{display: "inline-block", animation: animStr()}}>{char}</div> )}
  </div>
  </>
  )
}

function App() {
  const text = "Hello! I am Danilo Canguçu, an aspiring front-end developer."
  let textSplit = text.split(' ')
  console.log(Math.random())

  return (
    <div className="App">
      <header className="App-header">
          <div>
            {textSplit.map((word, i) =>
              <SomeComponent key={i} item={word}/>
            )}
          </div>
      </header>
    </div>
  );
}

export default App;
