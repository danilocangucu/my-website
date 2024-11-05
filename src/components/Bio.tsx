import React from "react"

const BioHeader: React.FC = () => {
  let text = "I am passionate about creating beautiful websites".toUpperCase()
  return (
    <h1 className="home-h1">{text}</h1>
  )
}

const Paragraphs: React.FC = () => {
  let P1 = `In my life, I've designed numerous websites.\
 As a teenager, I created personal blogs, a blog with schoolmates, and a fotolog.\
 Later, as a photographer and cultural worker, I built portfolios with my artwork\
 and pages for my ex-theater company.`
  let P2 = `Now, I am ready to start working as a professional developer with you!\
 I began learning to code in 2022 with online courses and tutorials.\
 I graduated in 2024 from Ålands Yrkesgymnasium with a Vocational ICT degree specializing in Cloud/DevOps.`;
  return (
    <div className='paragraphs'>
      <Paragraph text={P1} />
      <Paragraph text={P2} />
    </div>
  )
}

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }: ParagraphProps) => {
  return (
    <div className='paragraph'>
      {text}
    </div>
  )
}

interface PageVideoProps {
  videoNumber: string;
}

const PageVideo: React.FC<PageVideoProps> = ({ videoNumber }: PageVideoProps) => {
  return (
    <video
      className={`page-video video${videoNumber}`}
      src={`https://github.com/danilocangucu/my-website/blob/main/public/videos/page${videoNumber}.mov?raw=true`}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

const PageVideos: React.FC = () => {
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

const Bio: React.FC = () => (
  <div className="bio-body">
    <BioHeader />
    <Paragraphs />
    <PageVideos />
  </div>
)

export default Bio