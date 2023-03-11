// import danilovideo from './danilovideo.mp4';

const animStr = () =>`fadeIn 1000ms ease-out ${1000 * (Math.random())}ms forwards`;

const Hello = () => 
  (<>
  <h1 className='pop-from-left'>HELLO!</h1>
  </>)


const ShortDescription = ({ word }) => {

  let characters = word.split('')
  return (
  <>
  <div style={{ display: "inline-block"}}>
    {characters.map((char, i) =>
      <div key={i} className='short-description-text' style={{ animation: animStr()}}>{char}</div>
    )}
  <div className='short-description-text'>&nbsp;</div>
  </div>
  </>
  )
}

const Video = () => {
  setTimeout(() => {
    const domVideo = document.getElementById('danilo-video');
    domVideo.style.transitionDuration = '0.2s';
    domVideo.style.transform = `translate(0, 0) scale(1)`;
  }, 1000)
  return (
  <>
  <div id="danilo-video" className='danilo-video'>
  <video
    src="https://github.com/danilocangucu/my-website/blob/53b59a2efb3dda32f8fb757202d9efa78d0db6ed/src/components/danilovideo.mp4?raw=true"
    autoPlay muted loop playsinline type="video/mp4"/>
  </div>
  </>
  )
}

const Intro = () => {
  const shortDescriptionText1 = "I am Danilo Canguçu,"
  const shortDescriptionText2 = "your future front-end developer."
  let shortDescriptionSplit1 = shortDescriptionText1.split(' ')
  let shortDescriptionSplit2 = shortDescriptionText2.split(' ')
  return (
    <div className='intro'>
      <div className='intro-right'>
        <Hello />
        <div className='short-description-wrapper'>
                {shortDescriptionSplit1.map((word, i) =>
                  <ShortDescription key={i} word={word}/>
                )}
              </div>
              <div className='short-description-wrapper'>
                {shortDescriptionSplit2.map((word, i) =>
                  <ShortDescription key={i} word={word}/>
                )}
              </div>
      </div>
      <div className='intro-left'>
          <Video />
        </div>
    </div>
  )
}

export default Intro