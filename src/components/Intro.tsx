import React from "react"

const animStr = () => `fadeIn 1000ms ease-out ${1000 * (Math.random())}ms forwards`;

const Hello: React.FC = () =>
(<>
  <h1 className='pop-from-left home-h1'>HELLO!</h1>
</>)


interface ShortDescriptionProps {
  word: string;
}

const ShortDescription: React.FC<ShortDescriptionProps> =
  ({ word }: ShortDescriptionProps) => {
    let characters = word.split('')
    return (
      <>
        <div style={{ display: "inline-block" }}>
          {characters.map((char, i) =>
            <div key={i} className='short-description-text' style={{ animation: animStr() }}>{char}</div>
          )}
          <div className='short-description-text'>&nbsp;</div>
        </div>
      </>
    )
  }

const Video: React.FC = () => {
  // TODO spinner
  setTimeout(() => {
    const domVideo = document.getElementById("danilo-video");
    if (domVideo) {
      domVideo.style.transitionDuration = "0.2s";
      domVideo.style.transform = `translate(0, 0) scale(1)`;
    }
  }, 1000);
  return (
    <>
      <div id="danilo-video" className="danilo-video">
        <video
          src="https://github.com/danilocangucu/my-website/blob/53b59a2efb3dda32f8fb757202d9efa78d0db6ed/src/components/danilovideo.mp4?raw=true"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </>
  );
}

const Intro: React.FC = () => {
  const shortDescriptionText1 = "I am Danilo Canguçu,"
  const shortDescriptionText2 = "your future developer."
  let shortDescriptionSplit1 = shortDescriptionText1.split(' ')
  let shortDescriptionSplit2 = shortDescriptionText2.split(' ')
  return (
    <div className='intro'>
      <div className='intro-right'>
        <Hello />
        <div className='short-description-wrapper'>
          {shortDescriptionSplit1.map((word, i) =>
            <ShortDescription key={i} word={word} />
          )}
        </div>
        <div className='short-description-wrapper'>
          {shortDescriptionSplit2.map((word, i) =>
            <ShortDescription key={i} word={word} />
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
