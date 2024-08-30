const BioHeader = () => {
    let text = "I am passionate about creating beautiful websites".toUpperCase()
    return (
    <h1>{text}</h1>
    )
}

const Paragraphs = () => {
let P1 = `In my life, I've designed numerous websites.\
 As a teenager, I created personal blogs, a blog with schoolmates, and a fotolog.\
 Later, as a photographer and cultural worker, I built portfolios with my artwork\
 and pages for my ex-theater company.`
let P2 = `Now, I am ready to start working as a professional developer with you!\
 I began learning to code in 2022 with online courses and tutorials.\
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

const PageVideo = ({ videoNumber }) => {
  return (
    <video
      className={`page-video video${videoNumber}`}
      src={`https://github.com/danilocangucu/my-website/blob/main/public/videos/page${videoNumber}.mov?raw=true`}
      autoPlay
      muted
      loop
      playsInline
      type="video/mp4"
    />
  );
};

const PageVideos = () => {
  const videoNumbers = ["1", "2"];

  return (
    <div className="pages-videos">
      <div></div>
      <span></span>
      {videoNumbers.map((videoNumber) => (
        <div key={videoNumber}>
          <PageVideo videoNumber={videoNumber} />
        </div>
      ))}{" "}
    </div>
  );
};

const Bio = () => (
    <div className="bio-body">
        <BioHeader />
        <Paragraphs />
        <PageVideos />
    </div>  
)

export default Bio