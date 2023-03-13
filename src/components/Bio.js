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
            className='video1'
            src="https://github.com/danilocangucu/my-website/blob/main/src/components/page1.mov?raw=true"
            autoPlay muted loop playsInline type="video/mp4"/>
        </div>
        <span></span>
        <div>
        <video
            className='video2'
            src="https://github.com/danilocangucu/my-website/blob/main/src/components/page2.mov?raw=true"
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

export default Bio