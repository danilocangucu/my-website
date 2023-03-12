import './App.css';
import Intro from './components/Intro'
import page1 from  './components/page1.mov'
import page2 from  './components/page2.mov'

const animStr = () =>`fadeIn 1000ms ease-out ${1000 * (Math.random())}ms forwards`;

const ArrowDown = () => {
  const arrowDown = document.getElementsByClassName('arrow-down')
  setTimeout(() => {
    arrowDown[0].style.animation = animStr()
  }, 1500)
  return <div className='arrow-down'>↓</div>

}

const BioHeader = () => {
  let text = "I am passionate about creating beautiful websites.".toUpperCase()
  return (
  <h1>{text}</h1>
  )
}

const Paragraphs = () => {
  let P1 = "In my life, I've designed numerous websites.\
  As a teenager, I created personal blogs, a blog with schoolmates, and a fotolog.\
  Later, as a photographer and cultural worker, I built portfolios with my artwork\
  and pages for my ex-theater company."
  let P2 = `Now, I am ready to start working as a professional front-end developer with you!\
  I began learning to code in 2021 with online courses and tutorials.\
  Last year, I enrolled as a student at Grit:Lab in the Åland Islands to advance my skills.`
  return (
  <div className='paragraphs'>
    <Paragraph text={P1}/>
    <Paragraph text={P2}/>
  </div>
  )
}

const Paragraph = ({ text }) => {
  return (
    <div className='paragraph'>
      {text}
    </div>
  )
}

const PageVideos = () => {
  return (
    <div className='pages-videos'>
      <div>
      <video
       className='page-video video1'
       src={page1}
       autoPlay muted loop playsInline type="video/mp4"/>
      </div>
      <span></span>
      <div>
      <video
       className='page-video video2'
       src={page2}
       autoPlay muted loop playsInline type="video/mp4"/>
      </div>

    </div>
  )
}

const Bio = () => (
  <div className="bio-body">
    <BioHeader />
    <Paragraphs />
    <PageVideos />
  </div>  
)

function App() {
  return (
    <div className="App">
      <Intro />
      <ArrowDown />
      <Bio />
    </div>
  );
}

export default App;
